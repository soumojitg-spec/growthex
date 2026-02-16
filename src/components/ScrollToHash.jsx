import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If hash is present, scroll to the element
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                // Retry once in case of render delay
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            // Use window.scrollTo for top scrolling
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
}

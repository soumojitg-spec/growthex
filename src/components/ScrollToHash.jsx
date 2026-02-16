import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Map of paths to element IDs
        const pathToId = {
            '/use-cases': 'use-cases',
            '/how-it-works': 'how-it-works',
            '/features': 'features',
            '/solutions': 'solutions',
            '/pricing': 'pricing',
            '/case-studies': 'case-studies',
            '/integrations': 'integrations',
            '/faqs': 'faqs'
        };

        const targetId = pathToId[pathname];

        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                // Add diverse offsets for different sections if needed, or stick to standard scroll
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                // Retry once for render timing
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        const headerOffset = 80;
                        const elementPosition = el.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }, 100);
            }
        } else if (pathname === '/' || pathname === '/contact') {
            // Scroll to top for main pages
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* Clean URL Routes for Home Sections */}
                <Route path="/use-cases" element={<Home />} />
                <Route path="/how-it-works" element={<Home />} />
                <Route path="/solutions" element={<Home />} />
                <Route path="/pricing" element={<Home />} />
                <Route path="/case-studies" element={<Home />} />
                <Route path="/faqs" element={<Home />} />
                <Route path="/integrations" element={<Home />} />
                <Route path="/features" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

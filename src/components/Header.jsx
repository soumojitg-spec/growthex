import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = ['Use Cases', 'How It Works', 'Solutions', 'Pricing', 'Case Studies', 'FAQs'];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                            Growthex
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/contact" className="btn btn-secondary text-sm px-6 py-3">
                            Get a Demo
                        </Link>
                        <Link to="/contact" className="btn btn-primary text-sm px-6 py-3">
                            Book a Free Automation Audit
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 border-t border-gray-100 animate-fade-in">
                        <nav className="flex flex-col space-y-4 mb-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-3">
                            <Link to="/contact" className="btn btn-secondary text-sm">
                                Get a Demo
                            </Link>
                            <Link to="/contact" className="btn btn-primary text-sm">
                                Book a Free Automation Audit
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-400 py-20 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section - Spans 4 columns */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="text-3xl font-bold text-white mb-6 block tracking-tight">
                            Growthex
                        </Link>
                        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-lg">
                            Building the workforce of the future with AI agents.
                            Automate sales, support, and operations with enterprise-grade reliability.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Section - Spans 8 columns */}
                    <div className="lg:col-span-8 grid md:grid-cols-3 gap-12">
                        {/* Product Column */}
                        <div>
                            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/#use-cases" className="hover:text-white transition-colors block">Use Cases</Link>
                                </li>
                                <li>
                                    <Link to="/#how-it-works" className="hover:text-white transition-colors block">How It Works</Link>
                                </li>
                                <li>
                                    <Link to="/#features" className="hover:text-white transition-colors block">Features</Link>
                                </li>
                                <li>
                                    <Link to="/#solutions" className="hover:text-white transition-colors block">Solutions</Link>
                                </li>
                                <li>
                                    <Link to="/#pricing" className="hover:text-white transition-colors block">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/#case-studies" className="hover:text-white transition-colors block">Case Studies</Link>
                                </li>
                                <li>
                                    <Link to="/#integrations" className="hover:text-white transition-colors block">Integrations</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors block">About Us</a>
                                </li>
                                <li>
                                    <a href="#careers" className="hover:text-white transition-colors block">Careers</a>
                                </li>
                                <li>
                                    <a href="#blog" className="hover:text-white transition-colors block">Blog</a>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-white transition-colors block">Contact</Link>
                                </li>
                                <li>
                                    <a href="#legal" className="hover:text-white transition-colors block">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact/CTA Column */}
                        <div>
                            <h4 className="font-bold text-white mb-6 text-lg">Get in Touch</h4>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-gray-500 mt-1" />
                                    <a href="mailto:hello@growthex.com" className="hover:text-white transition-colors">
                                        hello@growthex.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                                    <span>San Francisco, CA</span>
                                </li>
                            </ul>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-white font-semibold group"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Growthex Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Automate Your Business Processes with AI Agents?
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                        Get a free audit and a practical automation blueprint tailored to your industry.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Link
                            to="/contact"
                            className="btn bg-white text-black hover:bg-gray-100 hover:shadow-2xl text-lg px-10 py-5"
                        >
                            Book a Free Automation Audit
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                        <Link
                            to="/contact"
                            className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-black text-lg px-10 py-5"
                        >
                            Get a Demo
                        </Link>
                    </div>

                    <a
                        href="https://wa.me/your-number"
                        className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-gray-300 transition-colors"
                    >
                        <MessageCircle className="w-6 h-6" />
                        WhatsApp Us Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

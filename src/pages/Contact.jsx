import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        industry: '',
        monthlyLeads: '',
        currentTools: '',
        contact: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                fullName: '',
                companyName: '',
                industry: '',
                monthlyLeads: '',
                currentTools: '',
                contact: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Main Content */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Let's Talk About AI Automation
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Share your details and we'll reach out within 24 hours with a custom automation plan.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-8">
                            {/* Contact Info - Sidebar */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Contact Cards */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                                    <a href="mailto:hello@growthex.com" className="text-gray-600 hover:text-black transition-colors">
                                        hello@growthex.com
                                    </a>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                                        +1 (234) 567-890
                                    </a>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center mb-4">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Office</h3>
                                    <p className="text-gray-600">
                                        San Francisco, CA<br />
                                        United States
                                    </p>
                                </div>

                                {/* Quick Info */}
                                <div className="bg-black text-white rounded-2xl p-6">
                                    <h3 className="font-bold mb-4">What Happens Next?</h3>
                                    <ul className="space-y-3 text-sm text-gray-300">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <span>We'll call you within 24 hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <span>15-min discovery call</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <span>Get a custom automation plan</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <span>No commitment required</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Form - Main Area */}
                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-10">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Check Your Inbox!
                                            </h3>
                                            <p className="text-gray-600">
                                                We've sent you the automation blueprint details.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="text-center mb-8">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                                    Get a Custom Automation Blueprint
                                                </h2>
                                                <p className="text-gray-600">
                                                    Enter your details below to get started
                                                </p>
                                            </div>

                                            {/* Full Name */}
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    required
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            {/* Company Name */}
                                            <div>
                                                <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Company Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    name="companyName"
                                                    required
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                                                    placeholder="Your Company"
                                                />
                                            </div>

                                            {/* Industry */}
                                            <div>
                                                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Industry *
                                                </label>
                                                <select
                                                    id="industry"
                                                    name="industry"
                                                    required
                                                    value={formData.industry}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none bg-white"
                                                >
                                                    <option value="">Select Industry</option>
                                                    <option value="d2c">D2C</option>
                                                    <option value="healthcare">Healthcare</option>
                                                    <option value="retail">Retail</option>
                                                    <option value="real-estate">Real Estate</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            {/* Monthly Leads */}
                                            <div>
                                                <label htmlFor="monthlyLeads" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Monthly Leads *
                                                </label>
                                                <select
                                                    id="monthlyLeads"
                                                    name="monthlyLeads"
                                                    required
                                                    value={formData.monthlyLeads}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none bg-white"
                                                >
                                                    <option value="">Select Range</option>
                                                    <option value="0-500">0–500</option>
                                                    <option value="500-2k">500–2k</option>
                                                    <option value="2k+">2k+</option>
                                                </select>
                                            </div>

                                            {/* Current Tools */}
                                            <div>
                                                <label htmlFor="currentTools" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Current Tools
                                                </label>
                                                <input
                                                    type="text"
                                                    id="currentTools"
                                                    name="currentTools"
                                                    value={formData.currentTools}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                                                    placeholder="WhatsApp, CRM, Sheets, Calendly"
                                                />
                                            </div>

                                            {/* Phone / Email */}
                                            <div>
                                                <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Phone / Email *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="contact"
                                                    name="contact"
                                                    required
                                                    value={formData.contact}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:ring-4 focus:ring-gray-100 transition-all outline-none"
                                                    placeholder="your@email.com or +1234567890"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary w-full text-lg py-4"
                                            >
                                                Get My Blueprint
                                                <ArrowRight className="w-5 h-5" />
                                            </button>

                                            <p className="text-xs text-center text-gray-400 mt-4">
                                                By submitting, you agree to our Terms & Privacy Policy.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;

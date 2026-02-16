import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
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

    const outcomes = [
        'Respond to leads in minutes—not hours',
        'Automate follow-ups across WhatsApp, email, and CRM',
        'Reduce manual work for sales & operations teams',
        'Improve lead-to-appointment and lead-to-order conversion',
        'Get clean dashboards and daily performance updates'
    ];

    const trustIcons = [
        'WhatsApp', 'Meta Lead Ads', 'Google Sheets', 'HubSpot',
        'Zoho', 'Shopify', 'Calendly', 'Slack'
    ];

    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Main Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                            AI Agents as a Service to{' '}
                            <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                                Automate Sales, Support & Operations
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Growthex builds and manages AI agents that run your repetitive workflows—lead qualification,
                            follow-ups, appointment booking, customer support, reporting—so your team focuses on
                            revenue and growth.
                        </p>

                        {/* Outcome Bullets */}
                        <div className="space-y-4 mb-10">
                            {outcomes.map((outcome, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-lg">{outcome}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link to="/contact" className="btn btn-primary">
                                Book a Free Automation Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                See Agent Demos
                            </Link>
                            <a
                                href="https://wa.me/your-number"
                                className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-black transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Get Pricing on WhatsApp
                            </a>
                        </div>

                        {/* Trust Strip */}
                        <div className="border-t border-gray-200 pt-8">
                            <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                                Works with:
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {trustIcons.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-black hover:shadow-md transition-all duration-200"
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Lead Form */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Get a Custom Automation Blueprint
                                </h3>
                                <p className="text-gray-600">
                                    Enter your details below to get started
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-green-600" />
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

                                    <button type="submit" className="w-full btn btn-primary py-4 text-lg">
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
        </section>
    );
};

export default Hero;

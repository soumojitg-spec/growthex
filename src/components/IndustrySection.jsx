import React from 'react';
import { ShoppingBag, Heart, Store, Building2, ArrowRight } from 'lucide-react';

const IndustrySection = () => {
    const industries = [
        {
            icon: ShoppingBag,
            title: 'D2C Automation',
            bottlenecks: [
                'COD confirmation',
                'Abandoned cart follow-ups',
                'Order FAQs',
                'RTO prevention',
                'Post-purchase support'
            ],
            solution: 'Handles inbound queries, triggers follow-ups, updates CRM/Sheets, escalates edge cases',
            cta: 'View D2C Agent Playbook',
            gradient: 'from-gray-900 to-gray-700'
        },
        {
            icon: Heart,
            title: 'Healthcare Automation',
            bottlenecks: [
                'Appointment scheduling',
                'Patient reminders',
                'Lead-to-visit follow-up',
                'Report delivery follow-ups',
                'FAQs'
            ],
            solution: 'Books appointments, sends reminders, answers common questions, routes urgent queries',
            cta: 'See Healthcare Agents',
            gradient: 'from-gray-800 to-gray-600'
        },
        {
            icon: Store,
            title: 'Retail Automation',
            bottlenecks: [
                'Store inquiries',
                'Pricing/catalog FAQs',
                'Franchise/dealership leads',
                'Daily reporting'
            ],
            solution: 'Captures leads, shares catalog, answers FAQs, routes to correct location/store manager',
            cta: 'Explore Retail Automation',
            gradient: 'from-gray-700 to-gray-500'
        },
        {
            icon: Building2,
            title: 'Real Estate Automation',
            bottlenecks: [
                'Lead qualification',
                'Site visit scheduling',
                'Broker coordination',
                'Property matching',
                'Follow-ups'
            ],
            solution: 'Qualifies buyer intent, suggests inventory, schedules visits, pushes updates to CRM',
            cta: 'Get Real Estate Demo',
            gradient: 'from-black to-gray-800'
        }
    ];

    return (
        <section id="use-cases" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Built for Decision Makers in D2C, Healthcare, Retail & Real Estate
                    </h2>
                    <p className="section-subtitle">
                        Every industry loses revenue in the same place: slow replies, inconsistent follow-ups,
                        messy handoffs, and untracked workflows. Growthex fixes that with managed AI agents.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={index}
                                className="card group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {industry.title}
                                </h3>

                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                        Common Bottlenecks:
                                    </p>
                                    <ul className="space-y-1">
                                        {industry.bottlenecks.map((bottleneck, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                                                {bottleneck}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                        What the Agent Does:
                                    </p>
                                    <p className="text-gray-700">
                                        {industry.solution}
                                    </p>
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-black font-semibold hover:text-gray-700 group-hover:gap-3 transition-all"
                                >
                                    {industry.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;

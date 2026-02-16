import React from 'react';
import { Bot, MessageSquare, Target, BarChart3, Calendar, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Deliverables = () => {
    const deliverables = [
        {
            icon: Bot,
            text: 'Custom AI agents for Sales, Support, Operations, and Reporting'
        },
        {
            icon: MessageSquare,
            text: 'WhatsApp + web chat + form-to-agent workflows'
        },
        {
            icon: Target,
            text: 'Lead qualification, scoring, and routing to your team'
        },
        {
            icon: BarChart3,
            text: 'Integrations with CRM, Google Sheets, calendars, and ad platforms'
        },
        {
            icon: HeadphonesIcon,
            text: 'Human handoff rules (sales team, support team, call team)'
        },
        {
            icon: Calendar,
            text: 'Dashboards + weekly insights (what\'s working, what to fix)'
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Your AI Agent Stack—Built, Deployed & Managed by Growthex
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {deliverables.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-black to-gray-800 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Plus: Ongoing optimization, monitoring, and updates
                            </h3>
                            <p className="text-gray-600">
                                We don't just build and leave. We continuously improve your agents to maximize performance.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                            <Link to="/contact" className="btn btn-primary whitespace-nowrap">
                                Talk to an Automation Architect
                            </Link>
                            <Link to="/contact" className="btn btn-secondary whitespace-nowrap">
                                Request a Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliverables;

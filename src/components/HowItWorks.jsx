import React from 'react';
import { Search, Wrench, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            icon: Search,
            title: 'Audit & Blueprint',
            description: 'We map your current process, tools, and drop-off points. You get a clear automation plan and expected impact.',
            color: 'from-gray-900 to-gray-700'
        },
        {
            number: '02',
            icon: Wrench,
            title: 'Build & Integrate',
            description: 'We build the agent workflows, connect WhatsApp/CRM/Sheets/calendars, and test edge cases.',
            color: 'from-gray-800 to-gray-600'
        },
        {
            number: '03',
            icon: Rocket,
            title: 'Launch & Optimize',
            description: 'We go live, monitor performance, refine prompts/logic, and improve conversion and resolution rates.',
            color: 'from-black to-gray-800'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        From Idea to Live AI Agents in Days, Not Months
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -z-10"></div>
                                )}

                                <div className="card text-center">
                                    <div className="relative inline-block mb-6">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-md">
                                            <span className="text-lg font-bold text-gray-900">{step.number}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/contact" className="btn btn-primary">
                        Book Free Audit
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        See Sample Blueprint
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

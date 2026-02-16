import React from 'react';
import { UserCheck, RefreshCw, Calendar, HeadphonesIcon, ShoppingCart, BarChart } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            icon: UserCheck,
            title: 'AI Lead Qualification Agent',
            description: 'Qualifies, scores, and routes leads to the right person with context.',
            gradient: 'from-gray-900 to-gray-700'
        },
        {
            icon: RefreshCw,
            title: 'AI Follow-up & Nurture Agent',
            description: 'Automated sequences that reduce drop-offs and keep pipelines warm.',
            gradient: 'from-gray-800 to-gray-600'
        },
        {
            icon: Calendar,
            title: 'AI Appointment Booking Agent',
            description: 'Books meetings/site visits/consultations and sends reminders automatically.',
            gradient: 'from-gray-700 to-gray-500'
        },
        {
            icon: HeadphonesIcon,
            title: 'AI Customer Support Agent',
            description: 'Answers FAQs, creates tickets, and escalates complex issues to humans.',
            gradient: 'from-black to-gray-800'
        },
        {
            icon: ShoppingCart,
            title: 'AI Sales Assistant Agent',
            description: 'Recommends products/properties, handles objections, and pushes to checkout/visit.',
            gradient: 'from-gray-900 to-gray-700'
        },
        {
            icon: BarChart,
            title: 'AI Reporting & Ops Agent',
            description: 'Daily metrics, pipeline hygiene, and performance summaries delivered automatically.',
            gradient: 'from-gray-800 to-gray-600'
        }
    ];

    return (
        <section id="solutions" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        AI Agents We Build to Automate Business Processes
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <div
                                key={index}
                                className="group card hover:scale-105"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a href="#contact" className="btn btn-primary">
                        Get the Right Agents for My Business
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solutions;

import React from 'react';
import { UserCheck, RefreshCw, Calendar, HeadphonesIcon, ShoppingCart, BarChart, Lock } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            icon: UserCheck,
            title: 'AI Lead Qualification Agent',
            description: 'Qualifies, scores, and routes leads to the right person with context.',
            gradient: 'from-gray-900 to-gray-700',
            link: 'https://leadflow.growthex.cloud/'
        },
        {
            icon: RefreshCw,
            title: 'AI Hiring Automation',
            description: 'Automate candidate screening, interview scheduling, and applicant Q&A to fast-track hiring.',
            gradient: 'from-gray-800 to-gray-600',
            link: 'https://ai-hiring-automation.growthex.cloud/'
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
                        const isActive = !!solution.link;

                        const CardContent = (
                            <>
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-5 ${isActive ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {isActive ? solution.title : (
                                        <span className="flex items-center gap-2">
                                            {solution.title}
                                        </span>
                                    )}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>

                                {!isActive && (
                                    <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                        <Lock className="w-3 h-3 text-gray-500" />
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Coming Soon</span>
                                    </div>
                                )}
                            </>
                        );

                        return isActive ? (
                            <a
                                key={index}
                                href={solution.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group card hover:scale-105 block h-full relative"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div
                                key={index}
                                className="group card h-full relative opacity-75 grayscale-[0.5] hover:opacity-80 transition-opacity cursor-not-allowed"
                            >
                                {CardContent}
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

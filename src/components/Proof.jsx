import React from 'react';
import { Clock, TrendingUp, Users, Database, ArrowRight } from 'lucide-react';

const Proof = () => {
    const metrics = [
        {
            icon: Clock,
            title: 'Faster Lead Response Time',
            description: 'From hours to minutes',
            gradient: 'from-gray-900 to-gray-700'
        },
        {
            icon: TrendingUp,
            title: 'Higher Lead-to-Appointment Conversion',
            description: 'Consistent follow-ups drive results',
            gradient: 'from-gray-800 to-gray-600'
        },
        {
            icon: Users,
            title: 'Lower Drop-offs from Missed Follow-ups',
            description: 'Never miss a lead again',
            gradient: 'from-gray-700 to-gray-500'
        },
        {
            icon: Database,
            title: 'Reduced Manual Workload',
            description: 'Team focuses on high-value tasks',
            gradient: 'from-black to-gray-800'
        }
    ];

    const caseStudies = [
        {
            industry: 'D2C Brand',
            problem: 'High cart abandonment and slow COD confirmations',
            agent: 'WhatsApp automation + CRM integration',
            workflow: 'Automated cart recovery, COD confirmation, order tracking',
            outcome: 'Improved conversion and reduced RTO'
        },
        {
            industry: 'Healthcare Clinic',
            problem: 'Missed appointments and manual scheduling',
            agent: 'Appointment booking + reminder agent',
            workflow: 'Auto-booking, SMS/WhatsApp reminders, calendar sync',
            outcome: 'Higher show-up rates, less admin work'
        },
        {
            industry: 'Real Estate',
            problem: 'Unqualified leads wasting sales time',
            agent: 'Lead qualification + site visit scheduler',
            workflow: 'Budget/location qualification, auto-schedule visits',
            outcome: 'Sales team focuses on qualified prospects'
        }
    ];

    return (
        <section id="case-studies" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        What Teams Typically Improve With Growthex
                    </h2>
                </div>

                {/* Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {metric.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {metric.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Case Studies */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Real-World Applications
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {caseStudies.map((study, index) => (
                            <div
                                key={index}
                                className="card"
                            >
                                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
                                    {study.industry}
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                            Problem
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            {study.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                            Agent Deployed
                                        </p>
                                        <p className="text-gray-700">
                                            {study.agent}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                            Workflow
                                        </p>
                                        <p className="text-gray-700">
                                            {study.workflow}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                            Outcome
                                        </p>
                                        <p className="text-accent-600 font-semibold">
                                            {study.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="#contact" className="btn btn-secondary">
                            Request Case Studies
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proof;

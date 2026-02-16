import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Integrations = () => {
    const integrations = [
        'WhatsApp API',
        'Meta Lead Ads',
        'Google Sheets',
        'HubSpot',
        'Zoho CRM',
        'Shopify',
        'WooCommerce',
        'Calendly',
        'Email',
        'Slack'
    ];

    const securityFeatures = [
        {
            icon: Lock,
            title: 'Role-based Access',
            description: 'Admin and team controls for secure access management'
        },
        {
            icon: Shield,
            title: 'Data Minimization',
            description: 'Collect only what\'s needed for the workflow'
        },
        {
            icon: Eye,
            title: 'Audit Logs',
            description: 'Track conversations and workflow actions (recommended)'
        },
        {
            icon: FileCheck,
            title: 'Human Handoff',
            description: 'Guardrails for edge cases and approval steps for sensitive actions'
        }
    ];

    return (
        <section id="integrations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        Works With Your Tools—Secure, Controlled, and Trackable
                    </h2>
                </div>

                {/* Integrations */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Seamless Integrations
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="px-6 py-4 bg-white rounded-xl border-2 border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 font-semibold text-gray-700"
                            >
                                {integration}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Features */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Security & Governance
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {securityFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/contact" className="btn btn-secondary">
                        Discuss Security & Compliance
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Integrations;

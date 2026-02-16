import React from 'react';
import { Check, ArrowRight, Zap, TrendingUp, Rocket } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            icon: Zap,
            price: 'Custom',
            priceSubtext: 'Based on workflow complexity',
            bestFor: 'Single workflow automation',
            description: 'Perfect for testing AI agents with one core process',
            includes: [
                '1 AI agent (lead qual OR booking OR support)',
                'WhatsApp + Web chat integration',
                'Basic CRM/Sheets sync',
                'Standard response templates',
                'Monthly performance review',
                'Email support (24hr response)'
            ],
            cta: 'Start Small',
            featured: false
        },
        {
            name: 'Growth',
            icon: TrendingUp,
            price: 'Custom',
            priceSubtext: 'Scales with your business',
            bestFor: 'Multi-channel sales & support automation',
            description: 'Most popular for growing teams ready to scale',
            includes: [
                '3-5 AI agents across workflows',
                'Multi-step automation sequences',
                'CRM + WhatsApp + Calendar + Ads sync',
                'Custom conversation flows',
                'Weekly optimization & A/B testing',
                'Performance dashboards',
                'Priority support (4hr response)',
                'Dedicated automation specialist'
            ],
            cta: 'Scale Your Team',
            featured: true
        },
        {
            name: 'Enterprise',
            icon: Rocket,
            price: 'Custom',
            priceSubtext: 'Tailored to your needs',
            bestFor: 'Full-stack automation across departments',
            description: 'For organizations automating at scale',
            includes: [
                'Unlimited AI agents & workflows',
                'Custom integrations & API access',
                'Advanced analytics & reporting',
                'Multi-team orchestration',
                'Daily performance optimization',
                'Dedicated success manager',
                'White-glove onboarding',
                '1hr priority support SLA',
                'Quarterly strategy sessions'
            ],
            cta: 'Book Strategy Call',
            featured: false
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-6">
                        Transparent Pricing
                    </div>
                    <h2 className="section-title">
                        Pricing That Grows With You
                    </h2>
                    <p className="section-subtitle">
                        Start with one workflow, expand as you see ROI. No hidden fees, no vendor lock-in.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={index}
                                className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.featured
                                    ? 'bg-black text-white shadow-2xl scale-105 border-4 border-gray-700'
                                    : 'bg-white border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl'
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-sm font-bold rounded-full shadow-lg">
                                        ⭐ Most Popular
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${plan.featured ? 'bg-white' : 'bg-black'} flex items-center justify-center mb-6`}>
                                    <Icon className={`w-7 h-7 ${plan.featured ? 'text-black' : 'text-white'}`} />
                                </div>

                                {/* Plan Name */}
                                <h3 className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <div className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-black'}`}>
                                        {plan.price}
                                    </div>
                                    <p className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                                        {plan.priceSubtext}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className={`text-sm mb-6 pb-6 border-b ${plan.featured ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'}`}>
                                    {plan.description}
                                </p>

                                {/* Best For */}
                                <div className={`mb-6 p-3 rounded-lg ${plan.featured ? 'bg-gray-900' : 'bg-gray-50'}`}>
                                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Best for:
                                    </p>
                                    <p className={`font-semibold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.bestFor}
                                    </p>
                                </div>

                                {/* Includes */}
                                <div className="mb-8">
                                    <p className={`text-xs font-semibold mb-4 ${plan.featured ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                                        What's Included:
                                    </p>
                                    <ul className="space-y-3">
                                        {plan.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-white' : 'text-black'}`} />
                                                <span className={`text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-700'}`}>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="#contact"
                                    className={`btn w-full ${plan.featured
                                        ? 'bg-white text-black hover:bg-gray-100'
                                        : 'btn-primary'
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <span className="font-bold text-black">All plans include:</span> Implementation,
                            training, ongoing monitoring, and continuous optimization. We don't just build and leave—
                            we manage and improve your agents to maximize ROI.
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                                💡 <span className="font-semibold">Not sure which plan fits?</span> Book a free
                                consultation and we'll recommend the right starting point.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

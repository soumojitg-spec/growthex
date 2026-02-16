import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is AI Agents as a Service?',
            answer: 'It\'s a managed setup where Growthex builds, deploys, and continuously improves AI agents that automate your workflows—without you hiring an internal AI team.'
        },
        {
            question: 'How long does it take to deploy?',
            answer: 'Many workflows can be launched quickly once tools and access are ready. Complex multi-step processes take longer due to integrations and testing.'
        },
        {
            question: 'Can the agent work on WhatsApp?',
            answer: 'Yes. We can deploy agents for WhatsApp workflows and connect them to your CRM, Sheets, and calendars.'
        },
        {
            question: 'Will the agent replace my team?',
            answer: 'No. It handles repetitive steps and handoffs cleanly. Your team stays focused on high-value conversations and closures.'
        },
        {
            question: 'Can the agent handoff to humans?',
            answer: 'Yes. We design rules for handoff—based on intent, keywords, lead score, or workflow stage.'
        },
        {
            question: 'How do you prevent wrong replies?',
            answer: 'We add guardrails: controlled knowledge sources, escalation rules, and safe fallback responses for uncertain cases.'
        },
        {
            question: 'Which industries do you support?',
            answer: 'We commonly deploy for D2C, Healthcare, Retail, and Real Estate—plus adjacent services with similar lead and support workflows.'
        },
        {
            question: 'What tools do you integrate with?',
            answer: 'Typically WhatsApp, Meta Lead Ads, Google Sheets, HubSpot/Zoho, Shopify/WooCommerce, Calendly, email, and Slack.'
        },
        {
            question: 'Can we start with one workflow first?',
            answer: 'Yes. Many clients start with lead qualification + follow-up, then expand to appointment booking and reporting.'
        },
        {
            question: 'How do we measure success?',
            answer: 'We track response speed, lead-to-appointment rate, lead-to-sale rate, resolution rate, and workflow completion.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">
                        FAQs About AI Agents as a Service
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors duration-200"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-bold text-gray-900 text-lg pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 bg-gray-50 animate-fade-in">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-6">
                        Still have questions?
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Talk to us →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

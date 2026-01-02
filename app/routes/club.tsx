import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { useState } from "react";

export async function loader() {
    return null;
}

export default function Club() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-red-50 via-white to-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">💼 Investment Club Program</div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">Build Your Finance <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Career</span></h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">Real education. Real capital. Real careers. Join 500+ students building wealth and changing their futures.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="#apply" size="lg" variant="primary">Apply Now</Button>
                            <Button href="#how" size="lg" variant="ghost">Learn More</Button>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="grid grid-cols-3 gap-6 mt-16 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">500+</div>
                            <div className="text-gray-600 text-sm">Students Active</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">10+</div>
                            <div className="text-gray-600 text-sm">Campuses Growing</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">$250K</div>
                            <div className="text-gray-600 text-sm">Capital Deployed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how" className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Three Membership Tiers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Explorer */}
                        <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-2">Explorer</h3>
                            <p className="text-red-600 font-bold text-lg mb-4">Free</p>
                            <p className="text-gray-700 mb-6">Perfect for curious learners exploring finance without commitment.</p>
                            <ul className="space-y-3 text-gray-700 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Webinars & intro content</li>
                                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Chapter events</li>
                                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Community access</li>
                            </ul>
                        </div>

                        {/* Builder - Featured */}
                        <div className="p-8 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl shadow-lg border-2 border-red-500 relative transform md:scale-105">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-2xl font-bold mb-2">Builder</h3>
                            <p className="font-bold text-lg mb-4">$25/year</p>
                            <p className="text-red-100 mb-6">Serious students ready to develop professional skills.</p>
                            <ul className="space-y-3 text-red-50 text-sm">
                                <li className="flex items-start gap-2"><span className="text-green-300 font-bold">✓</span> Complete curriculum</li>
                                <li className="flex items-start gap-2"><span className="text-green-300 font-bold">✓</span> Simulated trading platform</li>
                                <li className="flex items-start gap-2"><span className="text-green-300 font-bold">✓</span> 1-on-1 mentorship</li>
                                <li className="flex items-start gap-2"><span className="text-green-300 font-bold">✓</span> Competitions & challenges</li>
                                <li className="flex items-start gap-2"><span className="text-green-300 font-bold">✓</span> Job board access</li>
                            </ul>
                            <Button href="#apply" size="md" variant="white">Get Started</Button>
                        </div>

                        {/* Leader */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-black text-white rounded-xl shadow-sm border border-gray-700 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">👑</div>
                            <h3 className="text-2xl font-bold mb-2">Leader</h3>
                            <p className="text-red-400 font-bold text-lg mb-4">Merit-Only</p>
                            <p className="text-gray-300 mb-6">Top performers managing real capital with exclusive benefits.</p>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">✓</span> $5K-50K real capital</li>
                                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">✓</span> Performance stipends</li>
                                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">✓</span> Priority recruitment</li>
                                <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold">✓</span> Advanced masterclasses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Everything You Need to Succeed</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Education */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors hover:shadow-md">
                            <div className="text-5xl mb-4">📖</div>
                            <h3 className="text-lg font-bold mb-3 text-black">Education</h3>
                            <p className="text-gray-700 text-sm">Foundation → Technical → Fundamental → Advanced. 4-stage curriculum aligned with CFA/CMT prep.</p>
                        </div>

                        {/* Capital Access */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors hover:shadow-md">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-lg font-bold mb-3 text-black">Capital Access</h3>
                            <p className="text-gray-700 text-sm">Top performers manage real money. $250K deployed across students by 2026.</p>
                        </div>

                        {/* Mentorship */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors hover:shadow-md">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-lg font-bold mb-3 text-black">Mentorship</h3>
                            <p className="text-gray-700 text-sm">Monthly 1-on-1 with industry professionals. Fund managers, traders, fintech execs.</p>
                        </div>

                        {/* Network */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors hover:shadow-md">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-lg font-bold mb-3 text-black">Global Network</h3>
                            <p className="text-gray-700 text-sm">50+ campuses by 2028. Africa, Asia, and expanding globally.</p>
                        </div>
                    </div>

                    {/* Careers Feature */}
                    <div className="text-center p-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white">
                        <div className="text-5xl mb-4">🎯</div>
                        <h3 className="text-2xl font-bold mb-3">Career Placement</h3>
                        <p className="text-red-100 mb-4 max-w-2xl mx-auto">Direct recruitment pipelines with leading investment firms. 50+ placements annually by Year 3.</p>
                        <div className="text-sm text-red-200">Real jobs. Real salaries. Real impact.</div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Simple Application Process</h2>
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            { num: 1, title: "Submit Form", desc: "5 minutes" },
                            { num: 2, title: "Interview", desc: "15 minutes (optional)" },
                            { num: 3, title: "Get Access", desc: "7-10 days" },
                            { num: 4, title: "Start Learning", desc: "Immediately" }
                        ].map((step) => (
                            <div key={step.num} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                    {step.num}
                                </div>
                                <p className="font-bold text-lg text-black">{step.title}</p>
                                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button href="#apply" size="lg" variant="primary">Apply to Join the Club</Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "Do I need trading experience?",
                                a: "No! We teach everything from the ground up. Our curriculum is designed for complete beginners."
                            },
                            {
                                q: "Is this only for business students?",
                                a: "Not at all. We welcome students from all majors. Finance is for everyone."
                            },
                            {
                                q: "How much time does it take?",
                                a: "As much as you want. Explorer tier takes 2-3 hours/week. Builder tier is flexible based on your goals."
                            },
                            {
                                q: "Can I get scholarships?",
                                a: "Yes! We offer full scholarships based on financial need. Email hello@debigmarket.com to learn more."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors overflow-hidden">
                                <button
                                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <h3 className="font-bold text-lg text-black">{item.q}</h3>
                                    <span className={`text-2xl text-red-600 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFAQ === idx ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {expandedFAQ === idx && (
                                    <div className="px-6 pb-6 pt-0 text-gray-700 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Transform Your Future?</h2>
                    <p className="text-xl text-red-100 mb-8">Join hundreds of ambitious students building real wealth and launching real careers.</p>
                    <Button href="#apply" size="lg" variant="white">Apply Now →</Button>
                </div>
            </section>
        </Layout>
    );
}

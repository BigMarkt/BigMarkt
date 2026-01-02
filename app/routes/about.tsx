import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

export async function loader() {
    return null;
}

export default function About() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-red-50 via-white to-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">🎯 About BigMarkt</div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">From Campus to <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Career</span></h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">BigMarkt is a global investment learning platform that transforms emerging talent into verified professionals with real market experience.</p>
                    </div>
                </div>
            </section>

            {/* The Problem, Solution, Mission */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Problem */}
                        <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-xl shadow-sm border border-red-200 hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">🚨</div>
                            <h2 className="text-2xl font-bold mb-4 text-black">The Problem</h2>
                            <p className="text-gray-700 leading-relaxed">Millions graduate with finance degrees every year. Zero practical experience. Employers want verified track records and real-world skills, not just transcripts.</p>
                        </div>

                        {/* Solution */}
                        <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-200 hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">💡</div>
                            <h2 className="text-2xl font-bold mb-4 text-black">Our Solution</h2>
                            <p className="text-gray-700 leading-relaxed">Complete verified pathway: education → simulation → real capital → proven track records → dream careers. Learn by doing. Build reputation that matters.</p>
                        </div>

                        {/* Mission */}
                        <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm border border-green-200 hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">🚀</div>
                            <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">Empower the next generation of investors through hands-on experience, elite mentorship, and real capital access. Finance is for everyone.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Meet the Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Sylvester */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
                            <div className="text-6xl mb-4">👨‍💼</div>
                            <h3 className="text-2xl font-bold text-black mb-2">Sylvester E. Jefe</h3>
                            <p className="text-red-600 font-semibold mb-4">Founder & Trading Principal</p>
                            <p className="text-gray-700 text-sm leading-relaxed">Serial entrepreneur with 3+ years of professional trading experience. Visionary leader building the next generation of finance talent. Combines practical trading expertise with educational innovation.</p>
                        </div>

                        {/* Nelson */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
                            <div className="text-6xl mb-4">👨‍💼</div>
                            <h3 className="text-2xl font-bold text-black mb-2">Nelson O.</h3>
                            <p className="text-red-600 font-semibold mb-4">Senior Analyst & Co-Trader</p>
                            <p className="text-gray-700 text-sm leading-relaxed">Market expert specializing in risk management and portfolio optimization. Deep knowledge of technical analysis and price action trading. Ensures all strategies align with professional standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Paths */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-4">Your Track Record = Your Resume</h2>
                    <p className="text-center text-xl text-gray-600 mb-16">BigMarkt members don't apply to jobs. They get recruited.</p>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 text-black">Career Paths Available</h3>
                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {['Trading', 'Analysis', 'Risk Mgmt', 'Fintech', 'Portfolio Mgmt', 'Independent'].map((path) => (
                                <div key={path} className="p-6 bg-gradient-to-br from-red-50 to-white rounded-lg border border-red-200 hover:border-red-400 hover:shadow-md transition-all text-center">
                                    <p className="font-bold text-black">{path}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8 text-black">Career Support & Resources</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '📄', title: 'Resume Reviews', desc: 'Professional feedback from industry experts' },
                                { icon: '🎤', title: 'Mock Interviews', desc: 'Practice with real trading interview questions' },
                                { icon: '💼', title: 'Job Board', desc: 'Exclusive opportunities from partners' },
                                { icon: '💰', title: 'Salary Negotiation', desc: 'Guidance on market rates & packages' }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-center">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <p className="font-bold text-black mb-2">{item.title}</p>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentorship */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
                        <div className="text-5xl text-center mb-4">🤝</div>
                        <h2 className="text-4xl font-black text-center mb-4 text-black">Monthly 1-on-1 Mentorship</h2>
                        <p className="text-center text-xl text-red-600 font-semibold mb-8">With Industry Professionals</p>

                        <div className="mb-8">
                            <p className="text-center text-lg text-gray-700 mb-6">Learn directly from 40+ mentors specializing in:</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['Fund Managers', 'Active Traders', 'Fintech Execs', 'Risk Specialists'].map((type) => (
                                    <span key={type} className="px-6 py-2 bg-gradient-to-r from-red-100 to-red-50 text-red-700 rounded-full font-semibold border border-red-200">{type}</span>
                                ))}
                            </div>
                        </div>

                        <p className="text-center text-gray-700 mb-8">Every Builder member is personally matched with a mentor for real guidance, insider knowledge, and meaningful professional relationships that launch careers.</p>
                        <div className="text-center">
                            <Button to="/club" size="lg" variant="primary">Join to Get Matched</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Chapters */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 text-black">🌍 Global Chapters</h2>
                        <p className="text-2xl text-gray-700">10+ Universities. Growing to 50+.</p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-16 mb-16 border border-gray-200">
                        <p className="text-center text-gray-600 text-lg">[Interactive Map - Coming Soon]</p>
                        <p className="text-center text-gray-500 mt-4">See our expansion across Africa, Asia, and beyond</p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-black text-center mb-12 text-black">Start a Chapter at Your Campus</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: '👥', title: '10 Founding Members', desc: 'Build your core team' },
                                { icon: '👨‍🏫', title: 'Faculty Advisor', desc: 'University support' },
                                { icon: '✅', title: 'Campus Approval', desc: 'Official recognition' }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200 text-center hover:shadow-md transition-all">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <p className="font-bold text-black mb-2">{item.title}</p>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mb-8">
                            <p className="text-gray-700 mb-6"><span className="font-bold">We Provide:</span> Complete starter kit | Comprehensive training | Marketing materials | Ongoing support</p>
                            <Button size="lg" variant="primary">Start a Chapter</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Get In Touch</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 text-center hover:border-red-300 hover:shadow-lg transition-all">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="font-bold text-black mb-2 text-lg">General Inquiries</h3>
                            <a href="mailto:hello@debigmarket.com" className="text-red-600 hover:text-red-700 font-semibold">hello@debigmarket.com</a>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 text-center hover:border-red-300 hover:shadow-lg transition-all">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="font-bold text-black mb-2 text-lg">Club Applications</h3>
                            <a href="mailto:club@debigmarket.com" className="text-red-600 hover:text-red-700 font-semibold">club@debigmarket.com</a>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 text-center hover:border-red-300 hover:shadow-lg transition-all">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-bold text-black mb-2 text-lg">Partnerships</h3>
                            <a href="mailto:partners@debimarket.com" className="text-red-600 hover:text-red-700 font-semibold">partners@debimarket.com</a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Join the Movement?</h2>
                    <p className="text-xl text-red-100 mb-8">Become part of a global community transforming how talent enters finance.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/club" size="lg" variant="white">Join Investment Club</Button>
                        <Button to="/partners" size="lg"
                            className="border-3 border-white text-white px-8 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-200 backdrop-blur-sm"

                        >Become a Partner</Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

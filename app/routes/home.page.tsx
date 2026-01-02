import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Testimonial } from "../components/Testimonial";

export default function Home() {
    return (
        <Layout>
            {/* Homepage Hero */}
            <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-red-50 via-white to-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-6 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            🎯 Learn. Trade. Launch Your Career.
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-black">
                            Where Campus Talent <span className="text-red-600">Meets Real</span> Financial Markets
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 font-light">
                            Join 500+ students and professionals building verified trading records, managing real capital, and launching finance careers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button to="/club" size="lg" className="px-8 py-4 text-lg">
                                🚀 Apply to Investment Club
                            </Button>
                            <Button to="/partners" variant="ghost" size="lg" className="px-8 py-4 text-lg">
                                💼 Explore Partnership
                            </Button>
                        </div>

                        {/* Social proof badges */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">👥</span>
                                <span><strong>500+</strong> Members</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🎓</span>
                                <span><strong>10+</strong> Campuses</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📈</span>
                                <span><strong>$1M+</strong> AUM Target</span>
                            </div>
                        </div>
                    </div>

                    {/* The BigMarkt Path */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">The BigMarkt Path</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                                <h3 className="text-xl font-semibold mb-3 text-black">Learn</h3>
                                <p className="text-gray-600">Follow a structured curriculum from basics to advanced strategies. Learn technical and fundamental analysis with real market context.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                                <h3 className="text-xl font-semibold mb-3 text-black">Practice</h3>
                                <p className="text-gray-600">Trade with $100K in simulated capital. Get monthly mentorship and compete globally.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                                <h3 className="text-xl font-semibold mb-3 text-black">Prove</h3>
                                <p className="text-gray-600">Top performers manage real capital ($5K–$50K). Build verified track records and get recruited.</p>
                            </div>
                        </div>
                    </div>

                    {/* Two Platforms */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">Two Platforms. One Mission.</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="text-xl font-semibold mb-3 text-black">Investment Club</h3>
                                <p className="text-gray-600 mb-4">Students & young professionals building market skills<br />$25/year | 500+ members | 10+ campuses</p>
                                <Button to="/club" variant="ghost">Join Club →</Button>
                            </div>
                            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
                                <div className="text-4xl mb-4">💼</div>
                                <h3 className="text-xl font-semibold mb-3 text-black">Capital Partners</h3>
                                <p className="text-gray-600 mb-4">Transparent prop trading with professional accountability<br />30/70 split | $0 fees | $10K minimum | By invitation</p>
                                <Button to="/partners" variant="ghost">Partner Info →</Button>
                            </div>
                        </div>
                    </div>

                    {/* Live Stats */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">Live Stats</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                                <div className="text-gray-600">Members</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-red-600 mb-2">$1M+</div>
                                <div className="text-gray-600">Target AUM</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-red-600 mb-2">40+</div>
                                <div className="text-gray-600">Mentors</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
                                <div className="text-gray-600">Campuses</div>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">Social Proof</h2>
                        <div className="max-w-4xl mx-auto">
                            <Testimonial />
                        </div>
                    </div>

                    {/* CTA Strip */}
                    <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white p-12 rounded-2xl shadow-xl overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-red-400 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl md:text-5xl font-black mb-4">🚀 Ready to Launch Your Career?</h2>
                            <p className="text-lg text-red-100 mb-10 max-w-2xl mx-auto">
                                Join 500+ traders building verified records, managing real capital, and securing top finance jobs.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    to="/club"
                                    variant="white"
                                    size="lg"
                                    className="text-lg font-bold"
                                >
                                    ✨ Apply Now - It's Free
                                </Button>
                                <button
                                    className="border-3 border-white text-white px-8 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-200 backdrop-blur-sm"
                                >
                                    📅 Schedule a Call
                                </button>
                            </div>

                            <p className="text-sm text-red-100 mt-8">
                                ✓ 7-10 day approval | ✓ No upfront fees | ✓ Start trading immediately
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

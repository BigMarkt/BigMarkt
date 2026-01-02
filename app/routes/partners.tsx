import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

export async function loader() {
    return null;
}

export default function Partners() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-red-50 via-white to-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">💼 Capital Partners Program</div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">Transparent <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Prop Trading</span></h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">Zero management fees. Real-time dashboard. Professional risk controls. Earn 60% of profits.</p>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Partnership by invitation and qualification only. Accredited investors only.</p>
                        <Button href="#consultation" size="lg" variant="primary">Request Consultation</Button>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">60%</div>
                            <div className="text-gray-600 text-sm">Your Share</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">$0</div>
                            <div className="text-gray-600 text-sm">Management Fee</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">$10K</div>
                            <div className="text-gray-600 text-sm">Minimum Investment</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-red-600">24/7</div>
                            <div className="text-gray-600 text-sm">Live Dashboard</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Numbers - Enhanced */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Partnership Terms</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-xl shadow-sm border border-red-200">
                            <h3 className="text-2xl font-bold text-red-600 mb-6">💰 Financial Terms</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-black">Your Profit Share</p>
                                        <p className="text-gray-600 text-sm">60% of all profits generated</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-black">Zero Management Fees</p>
                                        <p className="text-gray-600 text-sm">No hidden charges or recurring costs</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-black">Minimum Investment</p>
                                        <p className="text-gray-600 text-sm">$10,000 to get started</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <div>
                                        <p className="font-bold text-black">Lock-Up Period</p>
                                        <p className="text-gray-600 text-sm">6 months initial commitment</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold text-black mb-6">📊 Account Access</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-xl">◆</span>
                                    <div>
                                        <p className="font-bold text-black">Live Dashboard</p>
                                        <p className="text-gray-600 text-sm">24/7 real-time access to all positions</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-xl">◆</span>
                                    <div>
                                        <p className="font-bold text-black">Real-Time P&L</p>
                                        <p className="text-gray-600 text-sm">Track performance instantly</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-xl">◆</span>
                                    <div>
                                        <p className="font-bold text-black">Daily Reports</p>
                                        <p className="text-gray-600 text-sm">Detailed trade summaries & analytics</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-xl">◆</span>
                                    <div>
                                        <p className="font-bold text-black">Monthly Statements</p>
                                        <p className="text-gray-600 text-sm">Full transparency and documentation</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trading Strategy */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Trading Strategy & Risk Management</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Asset Allocation */}
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-3xl">📊</span> Asset Allocation
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-medium">Crypto</span>
                                        <span className="font-bold text-red-600">10%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-medium">FX</span>
                                        <span className="font-bold text-red-600">10%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-medium">Indices</span>
                                        <span className="font-bold text-red-600">20%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-medium">Commodities</span>
                                        <span className="font-bold text-red-600">10%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700 font-medium">Cash Reserve</span>
                                        <span className="font-bold text-red-600">50%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trading Style & Risk */}
                        <div className="space-y-6">
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-3xl">⚡</span> Trading Style
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">→</span> Intraday focus (London/NY sessions)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">→</span> Technical + price action analysis
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">→</span> Both long and short positions
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-600 font-bold">→</span> Discretionary with systematic rules
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-xl shadow-sm border border-red-200">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-3xl">🛡️</span> Risk First
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">✓</span> Daily loss limit: 3% max
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">✓</span> Position limit: 2% per trade
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">✓</span> Maximum leverage: 5:1
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">✓</span> No overnight positions held
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Complete Transparency</h2>
                    <p className="text-center text-xl text-gray-700 font-semibold mb-12">You See Everything, Always</p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { icon: '👁️', title: 'Every Open Position', desc: 'Real-time view of all active trades' },
                            { icon: '📊', title: 'Every Closed Trade', desc: 'Complete trade history and analysis' },
                            { icon: '📈', title: 'Real-Time P&L', desc: 'Profit and loss updates instantly' },
                            { icon: '⚖️', title: 'Risk Metrics', desc: 'Daily risk exposure monitoring' },
                            { icon: '📋', title: 'Daily Reports', desc: 'Detailed breakdown every morning' },
                            { icon: '🔐', title: 'Full Documentation', desc: 'Monthly verified statements' }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-md transition-all text-center">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-lg text-black mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl text-center">
                        <p className="text-xl font-bold">No surprises. No hidden fees. No BS.</p>
                    </div>
                </div>
            </section>

            {/* Risk Warning */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-12">
                        <h2 className="text-3xl font-black text-red-800 mb-4 flex items-center gap-2">
                            ⚠️ Important Risk Disclosure
                        </h2>
                        <div className="space-y-4 text-red-900 mb-8">
                            <p className="text-lg">
                                <span className="font-bold">You can lose your entire investment.</span> Trading is inherently risky. Markets are volatile and unpredictable. Only invest capital you can afford to lose completely.
                            </p>
                            <p>
                                <span className="font-bold">Partnership Eligibility:</span> This program is limited to accredited investors only. Partners are selected through a rigorous qualification process and verification of financial status.
                            </p>
                            <p>
                                This is not an offer to the general public. Participation requires proof of accredited investor status and approval from our compliance team.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="#terms" size="lg" variant="ghost">Review Full Terms</Button>
                            <Button href="#consultation" size="lg" variant="primary">Request Consultation</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Partner With Us?</h2>
                    <p className="text-xl text-red-100 mb-8">Learn if you qualify for our exclusive Capital Partners program.</p>
                    <Button href="#consultation" size="lg" variant="white">Request Consultation →</Button>
                </div>
            </section>
        </Layout>
    );
}

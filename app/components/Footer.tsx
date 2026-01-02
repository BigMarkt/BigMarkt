import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="font-black text-2xl mb-2">BigMarkt</h3>
                        <p className="text-gray-400 text-sm">Campus roots. Global markets. Building the next generation of financially literate leaders.</p>
                        <div className="flex gap-3 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center text-white">𝕏</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center text-white">f</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center text-white">in</a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link to="/club" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Investment Club</Link></li>
                            <li><Link to="/partners" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Capital Partners</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">How It Works</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-red-400 transition-colors text-sm">About Us</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">Press</a></li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="mailto:hello@debigmarket.com" className="text-gray-400 hover:text-red-400 transition-colors">hello@debigmarket.com</a></li>
                            <li><a href="mailto:club@debigmarket.com" className="text-gray-400 hover:text-red-400 transition-colors">club@debigmarket.com</a></li>
                            <li><a href="mailto:partners@debimarket.com" className="text-gray-400 hover:text-red-400 transition-colors">partners@debimarket.com</a></li>
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="text-gray-500 text-xs bg-gray-900 px-3 py-1 rounded">🔒 Bank-Grade Security</span>
                            <span className="text-gray-500 text-xs bg-gray-900 px-3 py-1 rounded">✓ Transparent</span>
                            <span className="text-gray-500 text-xs bg-gray-900 px-3 py-1 rounded">🌍 Global</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* Bottom Footer */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 BigMarkt. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

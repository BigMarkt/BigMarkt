import { Link } from "react-router";
import { useState } from "react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="font-black text-2xl text-black hover:text-red-600 transition-colors">
                    BigMarkt
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    <Link to='/' className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium">Home</Link>
                    <Link to="/club" className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium">Club</Link>
                    <Link to="/partners" className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium">Partners</Link>
                    <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors font-medium">About</Link>
                </div>

                {/* Desktop Apply Button */}
                <Link to="/club" className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 shadow-md hover:shadow-lg transition-all">
                    Apply Now
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                >
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/club"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                            Club
                        </Link>
                        <Link
                            to="/partners"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                            Partners
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/club"
                            onClick={() => setIsOpen(false)}
                            className="block w-full px-4 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors text-center mt-4"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

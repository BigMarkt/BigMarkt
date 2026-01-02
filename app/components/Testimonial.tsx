import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "BigMarkt gave me what my degree couldn't—a verified trading record. Landed 3 job offers before graduation.",
        author: "Amara K.",
        role: "Investment Club Member, Class of 2025",
        avatar: "🎓",
        stat: "3 job offers",
    },
    {
        quote:
            "Real-time transparency, zero management fees, professional risk controls. Finally, a prop trading structure that makes sense.",
        author: "Marcus Chen",
        role: "Capital Partner",
        avatar: "💼",
        stat: "60% profit share",
    },
    {
        quote:
            "Mentoring BigMarkt students is the most rewarding part of my week. The talent is incredible and their dedication is unmatched.",
        author: "Sarah Mitchell",
        role: "Fund Manager & Mentor",
        avatar: "📊",
        stat: "40+ mentors",
    },
];

export function Testimonial() {
    const [testimonialIdx, setTestimonialIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 6000);
        return () => clearInterval(t);
    }, []);

    const current = testimonials[testimonialIdx];

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-xl shadow-lg border border-gray-100 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-6 text-6xl text-red-200 opacity-30">❝</div>

            {/* Star rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg font-medium text-gray-800 mb-6 leading-relaxed italic">
                "{current.quote}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center gap-4">
                <div className="text-5xl">{current.avatar}</div>
                <div className="flex-1">
                    <cite className="block font-semibold text-black text-base">— {current.author}</cite>
                    <p className="text-sm text-gray-600">{current.role}</p>
                </div>
                <div className="text-right">
                    <div className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {current.stat}
                    </div>
                </div>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 justify-center mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setTestimonialIdx(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx
                                ? 'bg-red-600 w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

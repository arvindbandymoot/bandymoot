// src/components/TestimonialCard.jsx
import { Star } from "lucide-react";

export default function TestimonialCard({ rating = 5, text, initials, name, role }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current "  fill="currentColor"   />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 mb-6 leading-relaxed">"{text}"</p>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {initials}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-800">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}

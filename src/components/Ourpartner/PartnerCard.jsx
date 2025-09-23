// PartnerCard.jsx
import React from "react";
import { Star } from "lucide-react";

const PartnerCard = ({ partner }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div
          className={`w-16 h-16 ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4`}
        >
          {partner.logo}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
          <span className="text-sm text-gray-500">{partner.category}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>

      {/* Info */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Partnership Type:</span>
          <span className="text-sm text-blue-600 font-semibold">
            {partner.partnership}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Partner Since:</span>
          <span className="text-sm text-gray-900">{partner.since}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <a
          href={partner.website}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;

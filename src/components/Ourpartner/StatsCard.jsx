// StatsCard.jsx
import React from "react";

const StatsCard = ({ icon: Icon, color, value, label }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center mb-3">
        <div className="p-3 rounded-full bg-gray-100">
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;

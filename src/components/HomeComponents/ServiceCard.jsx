import { Menu, X, ChevronDown, Search, User, Bell, Heart, ArrowUp, Globe, Shield, Award, Star, Play, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';
export default function ServiceCard({
  icon: Icon,          // 👈 icon prop accept
  title,
  description,
  features = [],
  color = "green"
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Icon container */}
      <div className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mb-6`}>
        {/* 👇 Icon dynamically render hoga */}
        {Icon && <Icon className={`w-8 h-8 text-${color}-600`} />}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
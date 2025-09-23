// src/components/ProjectCard.jsx
export default function ProjectCard({ icon: Icon, gradient, title, subtitle, description, category, linkText }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Top Section with Gradient + Icon */}
      <div className={`h-64 ${gradient} flex items-center justify-center`}>
        <div className="text-white text-center">
          {Icon && <Icon className="w-16 h-16 mx-auto mb-4 opacity-80" />}
          <h4 className="text-xl font-semibold">{subtitle}</h4>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            {linkText || "View Project →"}
          </button>
        </div>
      </div>
    </div>
  );
}

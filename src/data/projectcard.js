// src/data/projectsData.js
import { Globe, User, TrendingUp } from "lucide-react";

const projectsData = [
  {
    icon: Globe,
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    subtitle: "E-commerce Platform",
    title: "TechStore Online",
    description:
      "A complete e-commerce solution with payment integration, inventory management, and analytics.",
    category: "Web Development",
    categoryColor: "text-blue-600",
    linkText: "View Project →",
  },
  {
    icon: User,
    gradient: "bg-gradient-to-r from-richblue-400 to-pink-600",
    subtitle: "Fitness Tracker App",
    title: "FitLife Mobile",
    description:
      "A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.",
    category: "Mobile App",
    categoryColor: "text-green-600",
    linkText: "View Project →",
  },
  {
    icon: TrendingUp,
    gradient: "bg-gradient-to-br from-pure-greys-400 to-blue-600",
    subtitle: "Analytics Dashboard",
    title: "DataViz Pro",
    description:
      "Real-time analytics dashboard with interactive charts, reports, and data visualization.",
    category: "Web Application",
    categoryColor: "text-purple-600",
    linkText: "View Project →",
  },
];

export default projectsData;

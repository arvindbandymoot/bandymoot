// src/data/servicesData.js
import { Globe, Smartphone, Layers, Database, Settings, Users } from "lucide-react";

const servicesData = [
  {
    icon: Globe,
    color: "blue",
    title: "Web Development",
    description:
      "Modern, scalable, and secure websites and web applications tailored to your business needs.",
    features: ["Responsive Design", "SEO Optimized", "Cloud Ready"],
  },
  {
    icon: Smartphone,
    color: "green",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications with seamless user experiences.",
    features: ["iOS & Android", "React Native / Flutter", "App Store & Play Store Ready"],
  },
  {
    icon: Layers,
    color: "purple",
    title: "SAP Consulting & Development",
    description:
      "Comprehensive SAP solutions to streamline business processes and drive efficiency.",
    features: ["SAP ABAP", "SAP UI5/Fiori", "SAP MDK"],
  },
  {
    icon: Database,
    color: "yellow",
    title: "SAP Module Implementation",
    description:
      "End-to-end SAP implementation services to support core business operations.",
    features: ["SAP MM", "SAP SD", "SAP HANA"],
  },
  {
    icon: Settings,
    color: "red",
    title: "Custom Integrations",
    description:
      "Seamless integration between SAP, web, and mobile platforms for unified workflows.",
    features: ["API Development", "SAP Integration", "Automation"],
  },
  {
    icon: Users,
    color: "indigo",
    title: "IT Consulting & Support",
    description:
      "Expert guidance and ongoing support to keep your digital ecosystem running smoothly.",
    features: ["Strategy & Roadmap", "Maintenance & Support", "24/7 Assistance"],
  }
];

export default servicesData;

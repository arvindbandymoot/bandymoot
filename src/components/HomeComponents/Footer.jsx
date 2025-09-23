import React from 'react';
import { Heart, ArrowUp, Globe, Shield, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Bandy & Moot Private Limited</h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Building innovative solutions that help businesses grow and succeed in the digital world. 
                We're committed to excellence and customer satisfaction.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-400">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-400">Global</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Mobile Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cloud Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Enterprise Tools</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Webinars</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-white mb-2">Email Us</h4>
              <a href="mailto:hello@company.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                sales@bandy-moot.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Call Us</h4>
              <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition-colors">
                +91 9390952388
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-gray-400">Vasu Bhawan Near Prayag Dhaba Andawa Prayagraj, 211019, Uttar Pradesh, India<br />India, Pincode 211019</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Bandyandmoot pvt ltd. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>

            {/* Made with love & Back to top */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in INDIA</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
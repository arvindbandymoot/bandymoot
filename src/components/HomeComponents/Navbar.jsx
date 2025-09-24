import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';

function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our-Partners', href: 'Our Partner' },
    { name: 'Gallery', href: 'Gallery' },
    { name: 'Careers', href: 'Career' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      {/* DESKTOP NAVBAR - Horizontal Layout */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">Bandy&moot</span>
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="w-5 h-5" />
              </button> */}
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <a href='/Dashboard'><User className="w-5 h-5" /></a>
              </button>
               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <a href='/Login'>Log In</a>
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <a href='/Signup'>Sign Up</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR - Vertical Sidebar Style */}
      <div className="md:hidden">
        <div className="flex justify-between items-center h-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          {/* Mobile Logo */}
          <div className="text-xl font-bold text-white">
            Bandy&moot
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-blue-200 p-2 rounded-md"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-blue-200 p-1 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-6 py-8">
            {/* Profile Section */}
            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-800">Welcome!</p>
                <p className="text-sm text-gray-600">Explore our services</p>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between p-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 transform hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 transform -rotate-90" />
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <a href='/Signup'>Sign In</a>
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Create Account
              </button>
            </div>

            {/* Mobile Footer Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Search className="w-6 h-6 mb-1" />
                  <span className="text-xs">Search</span>
                </button>
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Bell className="w-6 h-6 mb-1" />
                  <span className="text-xs">Alerts</span>
                </button>
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <a href='/Dashboard'><User className="w-6 h-6 mb-1" /></a>
                  <span className="text-xs">Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
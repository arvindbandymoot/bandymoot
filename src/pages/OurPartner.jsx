import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';
import StatsCard from '../components/Ourpartner/StatsCard';
import whyTrustData from '../data/OurPartner/partnerTrust';
import PartnersCarousel from '../components/Ourpartner/PartnersCarousel';
import partners from '../data/OurPartner/Partners';

export default function OurPartners() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Partner data - replace with your actual partners

    const stats = [
        { icon: Users, label: "Active Partners", value: "50+", color: "text-blue-600" },
        { icon: Globe, label: "Countries", value: "15+", color: "text-green-600" },
        { icon: Award, label: "Joint Projects", value: "200+", color: "text-purple-600" },
        { icon: TrendingUp, label: "Success Rate", value: "98%", color: "text-orange-600" }
    ];

    const partnersPerSlide = 3;
    const totalSlides = Math.ceil(partners.length / partnersPerSlide);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };

    const getCurrentPartners = () => {
        const start = currentSlide * partnersPerSlide;
        return partners.slice(start, start + partnersPerSlide);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-blue-600 mr-3" />
                        <span className="text-blue-600 font-semibold text-lg">Trusted Partnerships</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Strategic Partners
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We collaborate with industry leaders and innovative companies to deliver
                        exceptional solutions and drive mutual success across global markets.
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <StatsCard
                            key={index}
                            icon={stat.icon}
                            color={stat.color}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>

                {/* Partners Carousel */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Featured Partners</h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                                aria-label="Previous partners"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-600" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                                aria-label="Next partners"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            <PartnersCarousel
                                partners={partners}
                                totalSlides={totalSlides}
                                partnersPerSlide={3}
                            />

                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentSlide(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Partnership Benefits Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Partner With Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Join our ecosystem of innovation and growth, where collaboration drives success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyTrustData.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Join our growing network of partners and unlock new opportunities for growth and innovation.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
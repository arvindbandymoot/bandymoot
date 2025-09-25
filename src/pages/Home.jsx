import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, User, Bell, Heart, ArrowUp, Globe, Shield, Award, Star, Play, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';
import ServiceCard from '../components/HomeComponents/ServiceCard';
import servicesData from '../data/servicecarddata';
import projectsData from '../data/projectcard';
import ProjectCard from '../components/HomeComponents/ProjectCard';
import TestimonialCard from '../components/HomeComponents/ClientCard';
import testimonialsData from '../data/testimonial';
import MyVideo from "../data/video1.mp4";
const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}


            <section id="home" className="relative pt-16 w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                    src={MyVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />

            {/* Optional overlay for darker effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center text-white flex flex-col justify-center h-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Build Something
                        <span className="block opacity-70 text-yellow-300">Amazing Today</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Transform your ideas into reality with our cutting-edge solutions and expert team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            Get Started Free
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                            <Play className="w-5 h-5 mr-2" />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </section>



            {/* <section id="home" className="pt-16 bg-[url('https://wallpaperbat.com/img/147933208-is-sap-an-erp-system.jpg')] bg-cover bg-center">
                <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
                    <h1 className="text-4xl md:text-3xl font-bold mb-6 leading-tight">
                        Build Something
                        <span className="block opacity-90 text-white">Amazing Today</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                        Transform your ideas into reality with our cutting-edge solutions and expert team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                            Get Started Free
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                            <Play className="w-5 h-5 mr-2" />
                            Watch Demo
                        </button>
                    </div>
                </div>
            </section> */}


            {/* Company Introduction Section */}
            <section id="about" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                                About Our Company
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We are a leading technology company with over 2 years of experience in delivering innovative
                                solutions to businesses worldwide. Our mission is to empower organizations with cutting-edge
                                technology that drives growth and success.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Empowering businesses with tailored solutions across supply chain, integration, SAP S/4 HANA, custom development, and database management. With expertise in multiple industries, including FMCG, chemical, mining, telecommunication, power, and Automotive, we drive innovation and operational efficiency for our clients
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                    <div className="text-gray-600">Team Members</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-lg opacity-90 mb-6">
                                    To be a leading name in innovation, recognized for our commitment to excellence and client satisfaction.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Innovation Driven</div>
                                        <div className="text-sm opacity-75">Always pushing boundaries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We offer comprehensive solutions to help your business succeed in the digital world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}


                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our Recent Projects
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Take a look at some of our recent work and see how we've helped businesses achieve their goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            View All Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-800 mb-2">4.9/5</div>
                                <div className="text-gray-600">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-800 mb-2">85%</div>
                                <div className="text-gray-600">Repeat Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-800 mb-2">24hr</div>
                                <div className="text-gray-600">Response Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10K+</div>
                            <div className="text-blue-200">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-200">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-blue-200">Uptime Guarantee</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-blue-200">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and transform your business today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                            <a href='/contact'>Contact Sales</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
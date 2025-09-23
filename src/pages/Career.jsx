import React, { useState } from 'react';
import { 
  Search, MapPin, Clock, DollarSign, Users, Heart, 
  Coffee, Laptop, GraduationCap, Briefcase, Send, 
  User, Mail, Phone, FileText, Building
} from 'lucide-react';

export default function SimpleCareers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  // Job listings
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "India Uttar Pradesh Prayagraj, IN",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Join our engineering team to build innovative software solutions."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "India Uttar Pradesh Prayagraj, IN",
      type: "Full-time",
      salary: "$70,000 - $100,000",
      description: "Create beautiful and intuitive user experiences for our products."
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $90,000",
      description: "Lead marketing campaigns and grow our brand presence."
    },
    {
      id: 4,
      title: "Sales Representative",
      department: "Sales",
      location: "India Uttar Pradesh Prayagraj, IN",
      type: "Full-time",
      salary: "$50,000 - $70,000 + Commission",
      description: "Build relationships with clients and drive revenue growth."
    },
    {
      id: 5,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      description: "Analyze data to provide insights for business decisions."
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$55,000 - $75,000",
      description: "Ensure customer satisfaction and success with our products."
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Sales', 'Analytics', 'Customer Success'];

  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Medical, dental, and vision coverage" },
    { icon: Coffee, title: "Flexible Hours", description: "Work-life balance with flexible scheduling" },
    { icon: Laptop, title: "Remote Work", description: "Work from anywhere options" },
    { icon: GraduationCap, title: "Learning Budget", description: "Professional development opportunities" }
  ];

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you soon.');
    setApplicationData({ name: '', email: '', phone: '', position: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-blue-600 font-semibold text-lg">Careers</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're looking for talented individuals to help us build the future. 
            Explore our open positions and find your next opportunity.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Departments</option>
                {departments.slice(1).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Open Positions ({filteredJobs.length})
          </h2>
          
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.salary}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button
                      onClick={() => setApplicationData(prev => ({ ...prev, position: job.title }))}
                      className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No positions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
                className="mt-2 text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Apply for a Position
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position of Interest *
                </label>
                <select
                  name="position"
                  value={applicationData.position}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a position</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={applicationData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about yourself and why you're interested..."
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </button>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Awards</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
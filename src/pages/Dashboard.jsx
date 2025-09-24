import React, { useState } from 'react';
import { Plus, Briefcase, Image, Edit, Trash2, Users, Calendar, MapPin, DollarSign, Upload, X } from 'lucide-react';

const HRDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Senior Software Developer',
      department: 'Engineering',
      location: 'Mumbai, India',
      salary: '₹12-18 LPA',
      type: 'Full-time',
      posted: '2024-09-20',
      applicants: 45
    },
    {
      id: 2,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Delhi, India',
      salary: '₹8-12 LPA',
      type: 'Full-time',
      posted: '2024-09-18',
      applicants: 23
    }
  ]);

  const [gallery, setGallery] = useState([
    { id: 1, title: 'Office Tour', url: '/api/placeholder/300/200', category: 'Office' },
    { id: 2, title: 'Team Meeting', url: '/api/placeholder/300/200', category: 'Events' },
    { id: 3, title: 'Company Picnic', url: '/api/placeholder/300/200', category: 'Events' },
    { id: 4, title: 'Workspace', url: '/api/placeholder/300/200', category: 'Office' }
  ]);

  const [showJobForm, setShowJobForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  });

  const [galleryForm, setGalleryForm] = useState({
    title: '',
    category: 'Office',
    file: null
  });

  const handleJobSubmit = (e) => {
    e.preventDefault();
    if (editingJob) {
      setJobs(jobs.map(job => 
        job.id === editingJob.id 
          ? { ...job, ...jobForm, applicants: job.applicants }
          : job
      ));
      setEditingJob(null);
    } else {
      const newJob = {
        id: Date.now(),
        ...jobForm,
        posted: new Date().toISOString().split('T')[0],
        applicants: 0
      };
      setJobs([...jobs, newJob]);
    }
    setJobForm({
      title: '',
      department: '',
      location: '',
      salary: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    });
    setShowJobForm(false);
  };

  const handleGallerySubmit = (e) => {
    e.preventDefault();
    if (galleryForm.file) {
      const newImage = {
        id: Date.now(),
        title: galleryForm.title,
        category: galleryForm.category,
        url: URL.createObjectURL(galleryForm.file)
      };
      setGallery([...gallery, newImage]);
      setGalleryForm({
        title: '',
        category: 'Office',
        file: null
      });
      setShowGalleryForm(false);
    }
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const deleteImage = (id) => {
    setGallery(gallery.filter(img => img.id !== id));
  };

  const editJob = (job) => {
    setJobForm(job);
    setEditingJob(job);
    setShowJobForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">HR Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome back, HR Manager</span>
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                HR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jobs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Job Postings
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Image className="w-4 h-4 inline mr-2" />
              Company Gallery
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {activeTab === 'jobs' && (
          <div>
            {/* Jobs Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Job Postings</h2>
              <button
                onClick={() => setShowJobForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </button>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => editJob(job)}
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteJob(job.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Posted: {job.posted}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {job.applicants} applicants
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            {/* Gallery Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Company Gallery</h2>
              <button
                onClick={() => setShowGalleryForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload Image
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => deleteImage(image.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900">{image.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Job Form Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editingJob ? 'Edit Job' : 'Post New Job'}
              </h3>
              <button
                onClick={() => {
                  setShowJobForm(false);
                  setEditingJob(null);
                  setJobForm({
                    title: '',
                    department: '',
                    location: '',
                    salary: '',
                    type: 'Full-time',
                    description: '',
                    requirements: ''
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleJobSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  required
                  value={jobForm.title}
                  onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    required
                    value={jobForm.department}
                    onChange={(e) => setJobForm({...jobForm, department: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    value={jobForm.location}
                    onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                  <input
                    type="text"
                    required
                    value={jobForm.salary}
                    onChange={(e) => setJobForm({...jobForm, salary: e.target.value})}
                    placeholder="e.g., ₹8-12 LPA"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select
                    value={jobForm.type}
                    onChange={(e) => setJobForm({...jobForm, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea
                  rows={4}
                  required
                  value={jobForm.description}
                  onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                <textarea
                  rows={3}
                  required
                  value={jobForm.requirements}
                  onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowJobForm(false);
                    setEditingJob(null);
                    setJobForm({
                      title: '',
                      department: '',
                      location: '',
                      salary: '',
                      type: 'Full-time',
                      description: '',
                      requirements: ''
                    });
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingJob ? 'Update Job' : 'Post Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Gallery Form Modal */}
      {showGalleryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upload Image</h3>
              <button
                onClick={() => setShowGalleryForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleGallerySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
                <input
                  type="text"
                  required
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({...galleryForm, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={galleryForm.category}
                  onChange={(e) => setGalleryForm({...galleryForm, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Office">Office</option>
                  <option value="Events">Events</option>
                  <option value="Team">Team</option>
                  <option value="Awards">Awards</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select thumnil Image</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setGalleryForm({...galleryForm, file: e.target.files[0]})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Image</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setGalleryForm({...galleryForm, file: e.target.files[0]})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowGalleryForm(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRDashboard;
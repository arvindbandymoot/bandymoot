import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Filter, Camera, Building, Users, Award, Calendar, MapPin, Eye } from 'lucide-react';

export default function CompanyGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Gallery data - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      title: "Modern Office Space",
      category: "office",
      description: "Our state-of-the-art headquarters featuring collaborative workspaces and modern amenities.",
      date: "2024-01-15",
      location: "New York, NY",
      photographer: "John Smith",
      image: "https://picsum.photos/800/600?random=1",
      thumbnail: "https://picsum.photos/400/300?random=1"
    },
    {
      id: 2,
      title: "Team Collaboration",
      category: "team",
      description: "Our talented team working together on innovative solutions and creative projects.",
      date: "2024-02-10",
      location: "Conference Room A",
      photographer: "Sarah Johnson",
      image: "https://picsum.photos/800/600?random=2",
      thumbnail: "https://picsum.photos/400/300?random=2"
    },
    {
      id: 3,
      title: "Annual Conference 2024",
      category: "events",
      description: "Highlights from our annual company conference with keynote speakers and networking sessions.",
      date: "2024-03-20",
      location: "Convention Center",
      photographer: "Mike Wilson",
      image: "https://picsum.photos/800/600?random=3",
      thumbnail: "https://picsum.photos/400/300?random=3"
    },
    {
      id: 4,
      title: "Innovation Award Ceremony",
      category: "awards",
      description: "Celebrating our recognition as Technology Innovation Company of the Year.",
      date: "2024-04-05",
      location: "Grand Ballroom",
      photographer: "Emily Davis",
      image: "https://picsum.photos/800/600?random=4",
      thumbnail: "https://picsum.photos/400/300?random=4"
    },
    {
      id: 5,
      title: "Product Development Lab",
      category: "office",
      description: "Our cutting-edge research and development facility where innovation comes to life.",
      date: "2024-01-30",
      location: "R&D Department",
      photographer: "Alex Chen",
      image: "https://picsum.photos/800/600?random=5",
      thumbnail: "https://picsum.photos/400/300?random=5"
    },
    {
      id: 6,
      title: "Team Building Retreat",
      category: "team",
      description: "Annual team building activities fostering collaboration and strengthening relationships.",
      date: "2024-02-28",
      location: "Mountain Resort",
      photographer: "Lisa Park",
      image: "https://picsum.photos/800/600?random=6",
      thumbnail: "https://picsum.photos/400/300?random=6"
    },
    {
      id: 7,
      title: "Client Success Stories",
      category: "events",
      description: "Showcasing successful project implementations and client testimonials.",
      date: "2024-03-15",
      location: "Client Meeting Room",
      photographer: "Robert Taylor",
      image: "https://picsum.photos/800/600?random=7",
      thumbnail: "https://picsum.photos/400/300?random=7"
    },
    {
      id: 8,
      title: "Excellence in Leadership",
      category: "awards",
      description: "Our leadership team receiving recognition for outstanding business excellence.",
      date: "2024-04-20",
      location: "Awards Gala",
      photographer: "Maria Rodriguez",
      image: "https://picsum.photos/800/600?random=8",
      thumbnail: "https://picsum.photos/400/300?random=8"
    },
    {
      id: 9,
      title: "Creative Workspace",
      category: "office",
      description: "Inspiring work environments designed to boost creativity and productivity.",
      date: "2024-01-25",
      location: "Design Studio",
      photographer: "David Kim",
      image: "https://picsum.photos/800/600?random=9",
      thumbnail: "https://picsum.photos/400/300?random=9"
    },
    {
      id: 10,
      title: "Company Culture Event",
      category: "events",
      description: "Celebrating our diverse and inclusive company culture with fun activities.",
      date: "2024-05-10",
      location: "Main Auditorium",
      photographer: "Jennifer Lee",
      image: "https://picsum.photos/800/600?random=10",
      thumbnail: "https://picsum.photos/400/300?random=10"
    },
    {
      id: 11,
      title: "Innovation Hub",
      category: "office",
      description: "Our dedicated space for brainstorming and innovative thinking.",
      date: "2024-02-20",
      location: "Innovation Center",
      photographer: "Mark Thompson",
      image: "https://picsum.photos/800/600?random=11",
      thumbnail: "https://picsum.photos/400/300?random=11"
    },
    {
      id: 12,
      title: "Best Employer Award 2024",
      category: "awards",
      description: "Recognized as the Best Employer in our industry for employee satisfaction.",
      date: "2024-06-15",
      location: "City Hall",
      photographer: "Rachel Green",
      image: "https://picsum.photos/800/600?random=12",
      thumbnail: "https://picsum.photos/400/300?random=12"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Images', icon: Camera, count: galleryItems.length },
    { id: 'office', name: 'Office & Facilities', icon: Building, count: galleryItems.filter(item => item.category === 'office').length },
    { id: 'team', name: 'Team & Culture', icon: Users, count: galleryItems.filter(item => item.category === 'team').length },
    { id: 'events', name: 'Events & Meetings', icon: Calendar, count: galleryItems.filter(item => item.category === 'events').length },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: galleryItems.filter(item => item.category === 'awards').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setLightboxImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-blue-600 font-semibold text-lg">Visual Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Company Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our journey through moments that define us - from workspace innovation 
            to team achievements and memorable milestones.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              {selectedCategory === 'all' ? 'All Images' : categories.find(cat => cat.id === selectedCategory)?.name}
              <span className="text-lg font-normal text-gray-500 ml-2">
                ({filteredItems.length} {filteredItems.length === 1 ? 'image' : 'images'})
              </span>
            </h2>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 sm:hidden"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter</span>
            </button>
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden sm:flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="sm:hidden mt-4 bg-white rounded-lg shadow-lg border overflow-hidden">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                      selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Loading placeholder */}
                {!loadedImages.has(item.id) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                
                {/* Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(item.id)}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zoom Button */}
                <button
                  onClick={() => openLightbox(item)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  aria-label={`View ${item.title} in full size`}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                {/* View Count */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-3 h-3" />
                  <span>{Math.floor(Math.random() * 1000) + 100}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-600">Try selecting a different category to view more images.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Load More Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl max-h-full w-full relative">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10 transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="bg-white rounded-b-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-600 mb-4">{lightboxImage.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{new Date(lightboxImage.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{lightboxImage.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{lightboxImage.photographer}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
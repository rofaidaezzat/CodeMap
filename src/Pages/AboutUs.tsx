import  { useRef, useEffect } from "react";
import {
  CircleArrowLeft,
  CircleArrowRight,
  UsersRound,
  Star,
  Award,
  Users,
  BookOpen,
  Target,
  Eye,
  Play,
} from "lucide-react";

const AboutUs = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // ✅ النوع الصحيح

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Mock team data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "10+ years in EdTech",
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "AI & Machine Learning Expert",
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Learning",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Educational Psychology PhD",
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack Development",
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      description: "User Experience Specialist",
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        // لا حاجة لأي منطق الآن
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Images Section */}
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop"
                      alt="Students learning"
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
                      alt="Online learning"
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=350&fit=crop"
                      alt="AI Technology"
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-bounce"></div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                  <UsersRound size={24} />
                </div>
                <span className="text-purple-600 text-xl font-semibold tracking-wide">
                  ABOUT US
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Empowering Learners with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Education
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                Transform your learning journey with our cutting-edge platform
                that combines personalized roadmaps, expert-curated content, and
                advanced AI guidance. Experience education that adapts to your
                pace and learning style.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target
                      className="text-purple-600 group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                    <h3 className="font-bold text-lg text-gray-800">
                      OUR MISSION
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Democratizing quality education through innovative
                    technology and personalized learning experiences.
                  </p>
                </div>

                <div className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye
                      className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                    <h3 className="font-bold text-lg text-gray-800">
                      OUR VISION
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Creating a world where everyone has access to personalized,
                    effective, and engaging education.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                {/* <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </button> */}
                <button className="group flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-purple-300 transition-all duration-300 text-gray-700 hover:text-purple-600">
                  <Play size={20} />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-blue-800 rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">150K+</div>
                <div className="text-purple-100">Active Learners</div>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen size={32} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-purple-100">Expert Courses</div>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={32} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                <div className="text-purple-100">Success Rate</div>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star size={32} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-purple-100">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate educators, innovative developers, and visionary leaders
            working together to revolutionize online learning.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-3 rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <CircleArrowLeft size={24} className="text-purple-600" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-3 rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <CircleArrowRight size={24} className="text-purple-600" />
          </button>

          {/* Team Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide px-12 py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="min-w-[320px] group perspective-1000">
                <div className="relative w-full h-96 preserve-3d group-hover:rotate-y-180 transition-all duration-700">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            Team Member
                          </span>
                        </div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                        />
                      </div>
                      <div className="flex-1 pt-16 px-6 pb-6 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-purple-600 font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          {member.description}
                        </p>
                        <div className="text-purple-500 text-sm font-medium">
                          Hover to connect →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">
                        Connect With Me
                      </h3>
                      <p className="text-purple-100 mb-8">
                        Let's build the future of education together!
                      </p>

                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.email}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already experiencing the future
            of education with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Learning Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;

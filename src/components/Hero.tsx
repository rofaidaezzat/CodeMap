import React, { useState } from "react";
import { Play, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const LearningPlatformHero: React.FC = () => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Learn Without
                <br />
                Limits
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Unlock your potential with our comprehensive educational
                platform. Access thousands of courses, expert instructors, and
                interactive learning experiences.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tracks">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Start Learning
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-gray-600">Courses</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2M+</div>
                  <div className="text-gray-600">Students</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    Certified
                  </div>
                  <div className="text-gray-600">Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Preview Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setIsPreviewHovered(true)}
              onMouseLeave={() => setIsPreviewHovered(false)}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100 rounded-3xl opacity-60"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] space-y-6">
                {/* Video Preview */}
                <div
                  className={`relative transition-all duration-500 ${
                    isPreviewHovered ? "scale-105" : "scale-100"
                  }`}
                >
                  <video
                    className="rounded-2xl shadow-lg w-90 h-60 object-cover"
                    src="/assets/Home/CodeMap.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Preview our platform
                  </h3>
                  <p className="text-gray-600 text-sm">
                    See what makes our learning experience unique
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              <div
                className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/3 left-4 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-float"></div>
        <div
            className="absolute top-40 right-20 w-8 h-8 bg-purple-300 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
        ></div>
        <div
            className="absolute bottom-40 left-1/4 w-4 h-4 bg-indigo-300 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "4s" }}
        ></div>
        </div>

      {/* Floating Animation Keyframes */}
        <style>{`
        @keyframes float {
            0%,
            100% {
            transform: translateY(0px);
            }
            50% {
            transform: translateY(-20px);
            }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        `}</style>
    </div>
    );
};

export default LearningPlatformHero;

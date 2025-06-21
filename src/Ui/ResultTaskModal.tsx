
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Award, Users, X } from 'lucide-react';

// Types
interface QuizResult {
  success: boolean;
  data: {
    score: number;
    percentage: number;
    maxScore?: number;
    correctAnswers: number;
    totalQuestions: number;
    timeSpent?: number;
    message: string;
    status: string;
    isLocked?: boolean;
    feedback?: string | null;
    startedAt?: string;
    completedAt?: string;
  };
}

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result?: QuizResult;
}

// Enhanced Button Component
const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base gap-2";
  
  const variants = {
    primary: "bg-[#5d3599] text-white hover:bg-[#4a2b7a] focus:ring-[#5d3599] shadow-lg hover:shadow-xl transform hover:scale-105",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Format time helper
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
};

// Get performance color based on percentage
const getPerformanceColor = (percentage: number): { bg: string; text: string; border: string } => {
  if (percentage >= 80) return { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' };
  if (percentage >= 60) return { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' };
  return { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' };
};

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, result }) => {
  if (!isOpen || !result || !result.success) return null;

  const { data } = result;
  const performanceColors = getPerformanceColor(data.percentage);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
          className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5d3599] to-[#7c4dbd] p-8 text-white text-center relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 className="h-20 w-20 mx-auto mb-4 drop-shadow-lg" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-2"
            >
              Quiz Completed!
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-purple-100 text-lg"
            >
              {data.message}
            </motion.p>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-purple-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Score Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className={`text-center p-4 rounded-xl border-2 ${performanceColors.bg} ${performanceColors.border}`}>
                <div className={`text-4xl font-bold ${performanceColors.text} mb-1`}>
                  {data.score}
                </div>
                <div className="text-sm text-gray-600 font-medium">Final Score</div>
                <div className="text-xs text-gray-500 mt-1">out of {data.maxScore || data.totalQuestions}</div>
              </div>
              
              <div className="text-center p-4 bg-[#5d3599] bg-opacity-10 rounded-xl border-2 border-[#5d3599] border-opacity-20">
                <div className="text-4xl font-bold text-[#5d3599] mb-1">
                  {Math.round(data.percentage)}%
                </div>
                <div className="text-sm text-gray-600 font-medium">Percentage</div>
                <div className="text-xs text-gray-500 mt-1">overall performance</div>
              </div>
            </motion.div>
            
            {/* Detailed Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Correct Answers</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {data.correctAnswers}/{data.totalQuestions}
                  </span>
                </div>
                
                {data.timeSpent && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Time Spent</span>
                    </div>
                    <span className="font-bold text-blue-600">
                      {formatTime(data.timeSpent)}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">Status</span>
                  </div>
                  <span className={`font-bold capitalize px-3 py-1 rounded-full text-sm ${
                    data.status === 'graded' 
                      ? 'bg-green-100 text-green-700' 
                      : data.status === 'locked'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {data.status}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Performance Message */}
            {data.percentage >= 80 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center"
              >
                <div className="text-green-700 font-semibold mb-1">🎉 Excellent Work!</div>
                <div className="text-green-600 text-sm">You've demonstrated strong understanding of the material.</div>
              </motion.div>
            )}

            {data.percentage >= 60 && data.percentage < 80 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 text-center"
              >
                <div className="text-yellow-700 font-semibold mb-1">👍 Good Job!</div>
                <div className="text-yellow-600 text-sm">You've passed with a solid understanding.</div>
              </motion.div>
            )}

            {data.percentage < 60 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 text-center"
              >
                <div className="text-red-700 font-semibold mb-1">📚 Keep Learning!</div>
                <div className="text-red-600 text-sm">Consider reviewing the material and trying again.</div>
              </motion.div>
            )}

            {/* Feedback */}
            {data.feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-4"
              >
                <div className="text-blue-800 font-medium mb-2">Instructor Feedback:</div>
                <div className="text-blue-700 text-sm italic">{data.feedback}</div>
              </motion.div>
            )}
          </div>
          
          {/* Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="px-8 pb-8"
          >
            <Button
              onClick={onClose}
              className="w-full"
            >
              Continue
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResultModal;
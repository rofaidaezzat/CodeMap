import React from "react";

interface Option {
  text?: string;
  label?: string;
  id?: string;
  _id?: string;
  value?: string;
}

interface QuestionType {
  questionText: string;
  options: Option[];
  questionId?: string;
  _id?: string;
  correctAnswers: string[];
  questionType?: "single_choice" | "multiple_choice";
}

interface IAnswers {
  questionId: string;
  selectedOptionIds: string[];
}

interface IProps {
  questions: QuestionType[];
  currentQuestionIndex: number;
  onAnswerChange: (questionId: string, selectedAnswer: string) => void;
  userAnswers: IAnswers[];
}

const Question: React.FC<IProps> = ({
  questions,
  currentQuestionIndex,
  onAnswerChange,
  userAnswers,
}) => {
  const handleOptionChange = (questionId: string, optionText: string) => {
    if (!questionId || !optionText) {
      console.warn("Invalid questionId or optionText:", {
        questionId,
        optionText,
      });
      return;
    }

    onAnswerChange(questionId, optionText);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">No question available</p>
      </div>
    );
  }

  // Get question ID with fallback
  const questionId = currentQuestion.questionId || currentQuestion._id;

  // Validate question data
  if (
    !questionId ||
    !currentQuestion.options ||
    !Array.isArray(currentQuestion.options)
  ) {
    console.warn("Invalid question data:", currentQuestion);
    return (
      <div className="flex items-center justify-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600 text-lg">Invalid question data</p>
      </div>
    );
  }

  // Find user's answer for this question
  const userAnswer = userAnswers.find((ans) => ans.questionId === questionId);
  const selectedAnswer = userAnswer?.selectedOptionIds?.[0] || "";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {/* Question Header */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
            <span className="text-blue-600 font-bold">
              {currentQuestionIndex + 1}.
            </span>{" "}
            {currentQuestion.questionText}
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            Select one answer
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3 mt-4">
          {currentQuestion.options.map((option, index) => {
            const optionId = option.id || option._id || `opt-${index}`;
            const optionText = option.text || option.label || option.value;

            if (!optionText) {
              console.warn("Invalid option data:", option);
              return null;
            }

            const isSelected = selectedAnswer === optionText;
            const radioId = `${questionId}-${optionId}`;

            return (
              <div
                key={radioId}
                className={`
                  relative flex items-center p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer
                  ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }
                `}
                onClick={() => handleOptionChange(questionId, optionText)}
              >
                <input
                  type="radio"
                  name={`question-${questionId}`}
                  id={radioId}
                  checked={isSelected}
                  onChange={() => handleOptionChange(questionId, optionText)}
                  value={optionText}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                />
                <label
                  htmlFor={radioId}
                  className="ml-4 text-lg text-gray-700 cursor-pointer select-none flex-1 font-medium"
                >
                  {optionText}
                </label>
                {isSelected && (
                  <div className="ml-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;

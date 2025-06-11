import { useState } from "react";
import CheckBox from "./checkbox/CheckBox";

interface Option {
    text: string;
    id: string;
}

interface QuestionType {
    questionText: string;
    options: Option[];
    correctAnswers: string[];
}

interface IProps {
    questions: QuestionType[];
    currentQuestionIndex:number
}

const Question = ({ questions,currentQuestionIndex }: IProps) => {
    

    //state for selete only one answer
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    

    //Handle selection 
    const handleOptionChange = (questionIndex: number, optionId: string) => {
    setSelectedAnswers((prev) => {
    //  if the selete is the will delete 
    if (prev[questionIndex] === optionId) {
        const updated = { ...prev };
        delete updated[questionIndex];
        return updated;
    }

    // if anthor option is will selected 
    return {
        ...prev,
        [questionIndex]: optionId,
    };
    });
};

    
    return (
    <div className="flex flex-col gap-6">
        {questions.map((question, index) => (
        <div key={index} className="flex flex-col gap-2">
            <p className="text-[25px] font-medium text-black">
            
            {currentQuestionIndex+1}-{question.questionText}
            </p>
            <ul className="flex flex-col gap-3">
            {question.options.map((option) => (
                <li key={option.id} className="flex gap-2 items-center">
                <CheckBox 
                    checked={selectedAnswers[index] === option.id}
                    onChange={() => handleOptionChange(index, option.id)}
                />
                <p className="text-[18px]">{option.text}</p>
                </li>
            ))}
            </ul>
        </div>
        ))}
    </div>
    );
};

export default Question;

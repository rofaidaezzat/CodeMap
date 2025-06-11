import { useState } from "react";
import { useGetTasksQuery } from "@/app/services/crudTasks";
import ButtonTask from "@/components/TaskFormComponents/ButtonTask/ButtonTask";
import Question from "@/components/TaskFormComponents/Question";
import CountDown from "@/components/TaskFormComponents/countdown/CountDown";
import LoadingTaskForm from "@/components/TaskFormComponents/LoadingTaskForm/LoadingTaskForm";

const TaskForm = () => {
    // states
    const { data,isLoading } = useGetTasksQuery();
    const [currentTaskIndex] = useState(0); // for not change title and description
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // state for current question 


    if(isLoading)  return <div className="min-h-screen flex justify-center items-center w-full"><LoadingTaskForm/></div>
    if (!data || data.length === 0) return null;

    const currentTask = data[currentTaskIndex]; // for not change title and description 
    const questions = currentTask.questions;
    const totalQuestions = questions.length;
    

    const handleNext = () => {
        // ckeck if we have next qes
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        // ckeck if we have Previous qes
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    return (
        <div className="mt-10 pt-10 flex flex-col items-center gap-10 bg-[#dce3fe] min-h-screen">
            <div className="w-full flex justify-end">
                    <CountDown/>
            </div>
            <div className="w-[750px] h-fit shadow-md shadow-gray-400 bg-slate-50">
                {/* Title */}
                <div className="flex flex-col gap-2 p-10">
                    <h1 className="text-[30px] font-bold">{currentTask.title}</h1>
                    <p className="text-[15px] text-gray-600 font-medium">{currentTask.description}</p>
                </div>
                {/* line */}
                <div className="w-full bg-slate-300 h-0.5"></div>
                {/* Question */}
                <div className="p-10">
                    <Question currentQuestionIndex={currentQuestionIndex} questions={[questions[currentQuestionIndex]]} />
                </div>
                {/* line */}
                <div className="w-full bg-slate-300 h-0.5"></div>
                {/* Buttons */}
                <div className="flex gap-2 p-7 items-center justify-end">
                    {
                        currentQuestionIndex > 0 && <ButtonTask title="Previous" onClick={handlePrevious} />
                    }
                    {
                        currentQuestionIndex === totalQuestions - 1 ?(
                            <ButtonTask title="submit"/>
                        ):(
                                <ButtonTask title="next" onClick={handleNext} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskForm;

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";




interface Option {
    text: string;
    id: string;

}

interface QuestionType {
    questionText: string;
    options: Option[];
    correctAnswers: string[];
} 

interface ITasks {
    _id: string;
    title: string;
    description: string;
    questions:QuestionType[]
}

export type ITasksResponse =ITasks[];



export const TaskApiSlice=createApi({
    reducerPath:'ApiTask',
    tagTypes:['TaskForm'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({

          // Get =>get
        getTasks:builder.query<ITasksResponse, void>({
            query:()=>{
                return{
                    url:"/tasks"
                }
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ _id }) => ({
                        type: 'TaskForm' as const,
                        id: _id,
                        })),
                        { type: 'TaskForm', id: 'LIST' },
                    ]
                    : [{ type: 'TaskForm', id: 'LIST' }],
        }),

    })

})

export const {useGetTasksQuery}=TaskApiSlice




import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";

interface Icategory{
    _id:string,
    title:string

}

export interface IStatges {
    _id: string;
    title: string;
    order: string;
    progress: string;
    category:Icategory[]
}



export type IstatgesResponse =IStatges[];

export const statgesApiSlice=createApi({
    reducerPath:'ApiStatges',
    tagTypes:['Getstatges'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({
             // Get =>get
        getStatges:builder.query<IstatgesResponse, string | null>({
            query:(_id)=>{
                return{
                    url:`/stages/roadmap/${_id}`
                }
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ _id }) => ({
                        type: 'Getstatges' as const,
                        id: _id,
                        })),
                        { type: 'Getstatges', id: 'LIST' },
                    ]
                    : [{ type: 'Getstatges', id: 'LIST' }],
        }),
            

    })

})

export const {useGetStatgesQuery}=statgesApiSlice



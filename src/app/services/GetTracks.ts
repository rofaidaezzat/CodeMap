
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";



export interface ITracks {
    _id: string;
    title: string;
    requirments: string;
    target_audience: string;
    assignedTo:string
    user:string[]
    image:string
}



export type ITracksResponse =ITracks[];

export const TracksApiSlice=createApi({
    reducerPath:'ApiTracks',
    tagTypes:['Getstatges'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({
             // Get =>get
        getTracks:builder.query<ITracksResponse, void>({
            query:()=>{
                return{
                    url:"/roadmaps"
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

export const {useGetTracksQuery}=TracksApiSlice



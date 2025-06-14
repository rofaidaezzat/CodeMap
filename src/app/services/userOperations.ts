
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";






export const UserOperationApiSlice=createApi({
    reducerPath:'ApiUserOperation',
    tagTypes:['UserOperation'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({

              //Create=>post
                enrollRoadMap: builder.mutation({
                query: (_id:string|null) => ({
                    url: `/users/enroll/${_id}`,
                    method: "POST",
                }),
                    invalidatesTags: [{ type: "UserOperation", id: "LIST" }]
            }),

    })

})

export const {useEnrollRoadMapMutation}=UserOperationApiSlice


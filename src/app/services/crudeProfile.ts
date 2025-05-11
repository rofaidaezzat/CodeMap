
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";






export const ProfileApiSlice=createApi({
    reducerPath:'ApiProfile',
    tagTypes:['UserProfile'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({

              //Create=>post
                UploadImageProfile: builder.mutation({
                query: ({ body }: { body: FormData}) => ({
                    url: `users/upload-profile-image`,
                    method: "POST",
                    body: body
                }),
            }),
    })

})

export const {useUploadImageProfileMutation}=ProfileApiSlice



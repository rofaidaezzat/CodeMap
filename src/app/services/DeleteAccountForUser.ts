import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./customBaseQuery";

interface Idelete{
    deletionCode:string
}



export const DeleteAcountApiSlice=createApi({
    reducerPath:'ApiDeleteAcount',
    tagTypes:['DeleteAccount'],
    baseQuery: baseQueryWithReauth,   
        endpoints:(builder)=>({
              //send request to delete=>post
                requestForDeleteAccount: builder.mutation({
                query: () => ({
                    url: `users/request-delete`,
                    method: "POST",
                }),
            }),
             //Delete account=>Delete
                deleteAccount: builder.mutation({
                query: ({ body }: { body: Idelete}) => ({
                    url: `users/delete-account`,
                    method: "DELETE",
                    body:body
                }),
            }),

    })

})

export const {useRequestForDeleteAccountMutation,useDeleteAccountMutation}=DeleteAcountApiSlice



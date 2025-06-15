

import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface IidClickedLesson{
    ClickedIdLesson:string|null
}

const initialState:IidClickedLesson={
    ClickedIdLesson:''
}

const clickedIdLessonSlice=createSlice({
    name:"clickedIdLesson",
    initialState,
    reducers:{
        clickedIdLessonAction:(state,action:PayloadAction<string|null>)=>{
            state.ClickedIdLesson=action.payload
        }
    }
})

export const {clickedIdLessonAction}=clickedIdLessonSlice.actions
export default  clickedIdLessonSlice.reducer

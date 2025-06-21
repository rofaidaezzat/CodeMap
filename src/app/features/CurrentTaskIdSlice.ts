
import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface ICurrentTaskId{
    CurrentTaskId:string|null
}

const initialState:ICurrentTaskId={
    CurrentTaskId:''
}

const currentTaskIdSlice=createSlice({
    name:"CurrentTaskId",
    initialState,
    reducers:{
        addCurrentTaskIdAction:(state,action:PayloadAction<string|null>)=>{
            state.CurrentTaskId=action.payload
        },
        resetCurrentTaskId: () => {
        return initialState;
    }
    }

})

export const {addCurrentTaskIdAction,resetCurrentTaskId}=currentTaskIdSlice.actions
export default  currentTaskIdSlice.reducer

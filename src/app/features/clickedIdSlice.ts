
import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface IidClicked{
    ClickedId:string|null
}

const initialState:IidClicked={
    ClickedId:''
}

const clickedIdSlice=createSlice({
    name:"clickedIdLesson",
    initialState,
    reducers:{
        clickedIdAction:(state,action:PayloadAction<string|null>)=>{
            state.ClickedId=action.payload
        },
        resetclickedId: () => {
        return initialState;
    }
    }

})

export const {clickedIdAction,resetclickedId}=clickedIdSlice.actions
export default  clickedIdSlice.reducer

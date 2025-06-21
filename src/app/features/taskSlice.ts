// taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITaskState {
  categoryTasks: {
    [userId: string]: {
      [categoryId: string]: string;
    };
  };
}


const initialState: ITaskState = {
  categoryTasks: {},
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
  setTaskForCategory: (state,action: PayloadAction<{ userId: string; categoryId: string; taskId: string }>) => {
  const { userId, categoryId, taskId } = action.payload;
  if (!state.categoryTasks[userId]) {
    state.categoryTasks[userId] = {};
  }
  state.categoryTasks[userId][categoryId] = taskId;
},
  resetTask: () => {
    return initialState;
  }
  },
});

export const { setTaskForCategory } = taskSlice.actions;
export default taskSlice.reducer;

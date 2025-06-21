import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WatchedLessonsState {
    watched: string[];
}

const initialState: WatchedLessonsState = {
    watched:[],
};

export const watchedLessonsSlice = createSlice({
    name: "watchedLessons",
    initialState,
    reducers: {
    markLessonWatched: (state, action: PayloadAction<string>) => {
        if (!state.watched.includes(action.payload)) {
        state.watched.push(action.payload);
        }
    },
    resetwatchedLessons: () => {
    return initialState;
    }
    },
});

export const { markLessonWatched,resetwatchedLessons } = watchedLessonsSlice.actions;
export default watchedLessonsSlice.reducer;

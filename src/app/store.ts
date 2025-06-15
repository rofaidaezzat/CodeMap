
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AccessTokenSlice from './features/AccessTokenSlice'
import { ProfileApiSlice } from './services/crudeProfile';
import { DeleteAcountApiSlice } from './services/DeleteAccountForUser';
import { TaskApiSlice } from './services/crudTasks';
import { TracksApiSlice } from './services/GetTracks';
import { statgesApiSlice } from './services/GetStatges';
import clickedIdSlice from './features/clickedIdSlice';
import clickedIdLessonSlice from './features/clickedIdLessonSlice'
import { UserOperationApiSlice } from './services/userOperations';
import watchedLessonsSlice from './features/WatchedLesson'

const persistAccessTokenConfig = {
    key: "accessToken",
    storage,
};
const persistclickedIdConfig = {
    key: "clickedId",
    storage,
};

const persistclickedIdLessonConfig = {
    key: "clickedIdLesson",
    storage,
};
const persistwatchedLessonsConfig = {
    key: "watchedLessons",
    storage,
};

const persistedaccessToken=persistReducer(persistAccessTokenConfig,AccessTokenSlice)
const persistedclickedId=persistReducer(persistclickedIdConfig,clickedIdSlice)
const persistedclickedIdLesson=persistReducer(persistclickedIdLessonConfig,clickedIdLessonSlice)
const persistedwatchedLessons=persistReducer(persistwatchedLessonsConfig,watchedLessonsSlice)



export const store = configureStore({
    reducer: {
        watchedLessons: persistedwatchedLessons,
        accessToken:persistedaccessToken,
        clickedId:persistedclickedId,
        clickedIdLesson:persistedclickedIdLesson,
        [ProfileApiSlice.reducerPath]:ProfileApiSlice.reducer,
        [DeleteAcountApiSlice.reducerPath]:DeleteAcountApiSlice.reducer,
        [TaskApiSlice.reducerPath]:TaskApiSlice.reducer,
        [TracksApiSlice.reducerPath]:TracksApiSlice.reducer,
        [statgesApiSlice.reducerPath]:statgesApiSlice.reducer,
        [UserOperationApiSlice.reducerPath]:UserOperationApiSlice.reducer
    }, 

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(ProfileApiSlice.middleware)
        .concat(DeleteAcountApiSlice.middleware)
        .concat(TaskApiSlice.middleware)
        .concat(TracksApiSlice.middleware)
        .concat(statgesApiSlice.middleware)
        .concat(UserOperationApiSlice.middleware)
        , 
})



    export const persister=persistStore(store)  
    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch

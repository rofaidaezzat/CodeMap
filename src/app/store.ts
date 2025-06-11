
import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AccessTokenSlice from './features/AccessTokenSlice'
import { ProfileApiSlice } from './services/crudeProfile';
import { DeleteAcountApiSlice } from './services/DeleteAccountForUser';
import { TaskApiSlice } from './services/crudTasks';
const persistAccessTokenConfig = {
    key: "accessToken",
    storage,
};

const persistedaccessToken=persistReducer(persistAccessTokenConfig,AccessTokenSlice)


export const store = configureStore({
    reducer: {
        accessToken:persistedaccessToken,
        [ProfileApiSlice.reducerPath]:ProfileApiSlice.reducer,
        [DeleteAcountApiSlice.reducerPath]:DeleteAcountApiSlice.reducer,
        [TaskApiSlice.reducerPath]:TaskApiSlice.reducer
    }, 

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(ProfileApiSlice.middleware)
        .concat(DeleteAcountApiSlice.middleware)
        .concat(TaskApiSlice.middleware)
        , 
})



    export const persister=persistStore(store)  
    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch

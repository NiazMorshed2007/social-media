import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import loggedSlice from "./features/loggedSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        isLogged: loggedSlice,
        userProfile: userSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
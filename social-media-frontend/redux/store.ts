import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import loggedSlice from "./features/loggedSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        isLogged: loggedSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
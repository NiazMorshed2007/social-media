import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface LoggedState {
    value: boolean
}

const initialState: LoggedState = {
    value: false
}

export const loggedSlice = createSlice({
    name: "isLogged",
    initialState,
    reducers: {
        logout: state => {
            state.value = false
        },
        login: state => {
            state.value = true
        },
    }
})

export const {login, logout} = loggedSlice.actions

export const selectLogged = (state: RootState) => state.isLogged.value

export default loggedSlice.reducer
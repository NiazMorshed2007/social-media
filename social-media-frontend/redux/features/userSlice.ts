import { createSlice } from "@reduxjs/toolkit"

interface UserSlice {
    username: String,
    name: String,
    bio: String,
    email: String,

}


const initialState: UserSlice = {
    username: "",
    name: "",
    bio: "",
    email: ""
}

export const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        
    }
})
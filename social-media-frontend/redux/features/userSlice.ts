import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

interface UserSlice {
    username: String,
    name: String,
    bio: String,
    userId: String,
    email: String,
}


const initialState: UserSlice = {
    username: "",
    name: "",
    bio: "",
    email: "",
    userId: ""
}

export const UserSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<UserSlice>) => {
            state = action.payload
        }
    }
})

export const {setProfile} = UserSlice.actions

export const userProfile = (state: RootState) => state.userProfile

export default UserSlice.reducer
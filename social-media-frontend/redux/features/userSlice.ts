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
            const {name, username, bio, email, userId} = action.payload
            state.bio = bio;
            state.username = username;
            state.name = name;
            state.userId = userId
            state.email = email
        }
    }
})

export const {setProfile} = UserSlice.actions

export const userProfile = (state: RootState) => state.userProfile

export default UserSlice.reducer
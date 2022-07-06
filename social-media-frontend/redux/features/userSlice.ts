import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISuggestionsProfile } from "../../interfaces/ISuggestionProfile"
import { RootState } from "../store"

interface UserSlice {
    username: String,
    name: String,
    bio: String,
    userId: String,
    email: String,
    followers: [],
    following: []
}


const initialState: UserSlice = {
    username: "",
    name: "",
    bio: "",
    email: "",
    userId: "",
    followers: [],
    following: []
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
            state.email = email,
            state.followers = []
            state.following = []
        }
    }
})

export const {setProfile} = UserSlice.actions

export const userProfile = (state: RootState) => state.userProfile

export default UserSlice.reducer
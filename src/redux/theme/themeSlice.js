import { createSlice } from "@reduxjs/toolkit";

const themeState = {
    primaryColor: "#27AE60",
    secondaryColor: "#191D2B",
    tertiaryColor: "#323B54"
}

const themeSlice = createSlice({
    name: "theme",
    initialState: themeState,
    reducers: {
        changeTheme: (state, action) => {
            return action.payload
        } 
    },
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions
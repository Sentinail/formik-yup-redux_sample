import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRegister: true
}

const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        goToRegister: (state) => {
            state.isRegister = true
        },
        goToLogin: (state) => {
            state.isRegister = false
        }
    }
})

export default statusSlice.reducer
export const { goToLogin, goToRegister } = statusSlice.actions
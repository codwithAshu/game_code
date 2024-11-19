import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../services/http/baseURl"

export const signUp = createAsyncThunk("/authSlice/signUp", async (value) => {
    try {
        const response = http.post("/users/endpoint", {

        })
        if (response.status === 200) {
            return response.data
        }

    } catch (err) {
        return err.response.data
    }
})
export const signIn = createAsyncThunk("/authSlice/signIn", async (value) => {
    try {

    } catch (err) {

    }
})
const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        loading: false,
        data: [],
        show: false
    },
    extraReducers: (parameter) => {
        parameter
            // signUP
            .addCase(signUp.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signUp.fulfilled, (state, action) => {
                console.log("action", action);
                state.loading = false
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false
            })
            // login
            .addCase(signIn.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false
            })

    }
})

export default authSlice.reducer

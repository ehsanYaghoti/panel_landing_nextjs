import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from ".";
import { UserModel } from "@/types/models";

interface AuthState {
    phoneVerifyToken ?: string;
    user ?: UserModel;
    isAuthenticated ?: boolean;
}

const initialState : AuthState = {
    phoneVerifyToken : undefined,
    user : undefined,
    isAuthenticated : false
}


export const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        updatePhoneVerifyToken : ( state , action : PayloadAction<string|undefined> ) => {
            state.phoneVerifyToken = action.payload
        },

        updateUserInfo : (state , action : PayloadAction<UserModel | undefined> ) => {
            state.user = action.payload
        },

        updateIsAuthenticated :  (state , action : PayloadAction<boolean> ) => {
            state.isAuthenticated = action.payload
        },
    }
})
    

export const { updatePhoneVerifyToken , updateUserInfo } = authSlice.actions;

export const selectPhoneverifyToken = (state : RootState) => state.auth.phoneVerifyToken

export const selectUserInfo = (state : RootState) => state.auth.user

export const selectIsAuthenticated = (state : RootState) => state.auth.isAuthenticated



export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {GetAccountToken} from '../../services'
export const accountSlice=createSlice({
    name:'account token',
    initialState:{token:'',loading:false,error:null},
    reducers:{
        setToken:(state,action)=>{state.token=action.payload},
        removeToken:(state)=>{state.token=''}
    },
    extraReducers:{
        [GetAccountToken.fulfilled]:(state,action)=>{
            state.token=action.payload.token
            localStorage.setItem('token',action.payload.token)
        },
        [GetAccountToken.rejected]:(state)=>{state.error='Invalied Email or Password'},
    }
})
export const {setToken,removeToken} =accountSlice.actions
export default accountSlice.reducer
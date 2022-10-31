import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initailState={
    loginModal:10,
} 

const modalSlice=createSlice({
    name:"modal",
    initailState:initailState,
    reducers:{
        setLoginModal:(state)=>{state.loginModal=20}
    }
})
export const {setLoginModal}=modalSlice.actions
export default modalSlice.reducer

 
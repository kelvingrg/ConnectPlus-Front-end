import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
 socket:(null),


   
} ;

const chatReducer=createSlice({
    name:"chat",
    initialState:INITIAL_STATE,
    reducers:{
      
        setChatSocket:(state,action)=>{state.socket=action.payload}
    }
})
export const {
    setChatSocket,

}=chatReducer.actions
export default chatReducer.reducer
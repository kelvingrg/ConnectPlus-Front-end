import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import modalReducer from "./ModalSlice"
import postTypeReducer from './PostTypeReducer';
import loginReducer from './LoginReducer';


export const store = configureStore({

    reducer: {
        modal: modalReducer,
        postType: postTypeReducer,
        login: loginReducer
    }
});

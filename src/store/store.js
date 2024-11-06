import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
import loadingReducer from "./loadingSlice"


const store = configureStore({
    reducer:{
        auth : authSlice,
        loading: loadingReducer
    }
})
export default store;

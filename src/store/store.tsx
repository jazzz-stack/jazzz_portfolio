import {configureStore} from '@reduxjs/toolkit';
import commonReducer from "./common/commonSlice";

const store = configureStore({
    reducer:{
        commonReducer:commonReducer
    }
})

export default store
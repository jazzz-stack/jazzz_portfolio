import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:false
}

const commonSlice = createSlice({
    name: 'common',
    initialState:initialState,
    reducers:{
        setLoading(state,action){
            state.loading = action.payload
        },
        setError(state,action){
            state.error = action.payload
        }
    }
})

export const {setLoading,setError} = commonSlice.actions
export default commonSlice.reducer
import { createSlice } from '@reduxjs/toolkit'


const langSlice = createSlice({
    name:"language",
    initialState:{
        lang:"en",
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.lang = action.payload;
        },
    },
});
export const {changelanguage}=langSlice.actions;
export default langSlice.reducer;
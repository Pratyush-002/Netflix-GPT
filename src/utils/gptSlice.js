import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptStatus: false,

    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptStatus = !state.showGptStatus;
        }
    }
 })

 export const { toggleGptSearchView } = gptSlice.actions;

 export default gptSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptStatus: false,
        movieNames: null,
        movieResults: null,

    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptStatus = !state.showGptStatus;
        },
        addGptMoviesResults:(state, actions)=>{
            const {movieNames, movieResults} = actions.payload;
            state.movieResults  = movieResults;
            state.movieNames = movieNames
        }
    }
 })

 export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;

 export default gptSlice.reducer;
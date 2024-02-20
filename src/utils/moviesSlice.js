import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        airingToday: null,
    }
    ,
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies= action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies= action.payload;
        },
        addAiringToday: (state, action) =>{
            state.airingToday= action.payload;
        },
        addPopularTvShow: (state, action) =>{
            state.popularTvShow= action.payload;
        },
        addTopRatedTvShow: (state, action) =>{
            state.topRatedTvShow= action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
        },

    },
})

export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies, addTopRatedMovies, addAiringToday, addPopularTvShow, addTopRatedTvShow} = moviesSlice.actions;

export default moviesSlice.reducer;
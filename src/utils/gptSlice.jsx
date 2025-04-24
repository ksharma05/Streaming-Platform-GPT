import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        gptMovieList: null,
        tmdbMovieData: null
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addTmdbMovies: (state, action)=>{
            const {movieList, movieData} = action.payload;
            state.gptMovieList = movieList;
            state.tmdbMovieData = movieData;
        }
    }
});

export const {toggleGptSearch, addTmdbMovies} = gptSlice.actions;

export default gptSlice.reducer;
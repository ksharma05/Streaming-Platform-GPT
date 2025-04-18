import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailerVideo: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPolularMovies: (state, action)=>{
            state.polularMovies = action.payload
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload
        },
        addMovieTrailerVideo: (state, action)=>{
            state.movieTrailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailerVideo, addPolularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
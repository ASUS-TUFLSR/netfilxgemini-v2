import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo: null,
    },
    reducers:{
        addNowPlayingMoives: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
        addPopularMoives: (state, action) => {
            state.popularMovies = action.payload;
        }
    },
});

export const { addNowPlayingMoives, addTrailerVideo, addPopularMoives } = movieSlice.actions;

export default movieSlice.reducer;
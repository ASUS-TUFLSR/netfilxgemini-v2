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
        }
    },
});

export const { addNowPlayingMoives, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
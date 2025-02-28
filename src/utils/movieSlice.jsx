import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMoives: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const { addNowPlayingMoives } = movieSlice.actions;

export default movieSlice.reducer;
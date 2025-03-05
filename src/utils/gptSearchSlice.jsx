import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch : false,
        geminiMovies: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGeminiMovieResult: (state, action) => {
            state.geminiMovies = action.payload;
        },
    },
});

export const {toggleGptSearchView, addGeminiMovieResult} = gptSlice.actions;

export default gptSlice.reducer;
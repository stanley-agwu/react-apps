import { createReducer } from '@reduxjs/toolkit'
import { addMovie, deleteMovie } from '../actions/movieActions'

const initialState = {
    movies: []
}

const movieReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addMovie, (state, action) => {
            state.movies.push(action.payload)
        })
        .addCase(deleteMovie, (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
        })
})

export default movieReducer
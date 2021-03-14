import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieReducers'

const store = configureStore({
    reducer: { movies: movieReducer }
})

export default store
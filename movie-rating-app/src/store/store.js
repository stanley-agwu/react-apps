import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../../../../src/store/reducers/movieReducers'

const store = configureStore({
    reducer: { movies: movieReducer }
})

export default store
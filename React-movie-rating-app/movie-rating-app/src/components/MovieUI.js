import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovie } from '../store/actions/movieActions'

const MoviesUI = () =>{
    const movies = useSelector(state => state.movies.movies)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteMovie({ id }))
    }
    let movieList
    movies.length ? (
        movieList = movies.map(movie => { 
            return (
                    <div className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <span onClick={() => handleDelete(movie.id)}><i className="far fa-trash-alt"></i></span>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                    )
                })
        ) : movieList = <p className="empty">There are no movies to display!</p>
    
    return (
        <div className="movies-list">
            {movieList}
        </div>
    )
}
export default MoviesUI 
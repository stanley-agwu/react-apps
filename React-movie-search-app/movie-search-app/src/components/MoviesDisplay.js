import React from 'react' 
import MovieCard from './MovieCard'

const MoviesDisplay = ( {movies} ) => {
    let uimovie = movies.filter(movie => movie.poster_path).map(movie => {
        return (
            <MovieCard movie={movie} />
            )
        })
    return (
        <div className="card--list">
        {uimovie}
        </div>
    )
}
export default MoviesDisplay
import React, { useState } from 'react'

const SearchMovies = () => {
    const [queryString, setQueryString] = useState("")
    const [movies, setMovies] = useState([])
    const searchMovies = async (e) => {
        e.preventDefault()
        const API_KEY = AP_KEY_String

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&
                        language=en-US&query=${queryString}&page=1&include_adult=false`
        try {
            const response = await fetch(url)
            const data = await response.json()
            let moviesArray = data.results.map(movie => movie.title)
            setMovies({movies:moviesArray})           
        } catch (error) {
            console.error(error)

        }
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input" name="query" placeholder="i.e. Jurassic Park" 
                value={queryString} onChange={e => setQueryString(e.target.value)} />
            <button className="button">Search</button>
        </form>
    )
}
export default SearchMovies
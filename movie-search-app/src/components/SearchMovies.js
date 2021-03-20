const SearchMovies = () => {
    const searchMovies = async (e) => {
        e.preventDefault()


        const queryString = "Jurassic Park"
        const API_KEY = API_KEY_String

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&
                        language=en-US&query=${queryString}&page=1&include_adult=false`
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)   
        } catch (error) {
            console.error(error)

        }
    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query" >Movie Name</label>
            <input className="input" name="query" placeholder="i.e. Jurassic Park" />
            <button className="button">Search</button>
        </form>
    )
}
export default SearchMovies
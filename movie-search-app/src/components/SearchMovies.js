const SearchMovies = () => {
    return (
        <form className="form">
            <label className="label" htmlFor="query" >Movie Name: </label>
            <input className="input" name="query" placeholder="i.e. Jurassic Park" />
        </form>
    )
}
export default SearchMovies
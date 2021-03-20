import React, { useState } from 'react'
import DisplayMovies from './components/DisplayMovies';
import Header from './components/Header';
import SearchMovies from './components/SearchMovies'

const Main = () => {
  const [movies, setMovies] = useState([])

  const addMovies = (searchData) => {
    setMovies(searchData)
  }
  return (
    <div className="container">
      <Header />
      <DisplayMovies movies={movies} />
      <SearchMovies addMovies={addMovies} />
    </div>
  );
}

export default Main;

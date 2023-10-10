import React, { useState } from 'react'
import MoviesSearch from './components/MoviesSearch';
import Header from './components/Header';
import MoviesDisplay from './components/MoviesDisplay'

const Main = () => {
  const [movies, setMovies] = useState([])

  const addMovies = (searchData) => {
    setMovies(searchData)
  }
  return (
    <div className="container">
      <Header />
      <MoviesDisplay movies={movies} />
      <MoviesSearch addMovies={addMovies} />
    </div>
  );
}

export default Main;

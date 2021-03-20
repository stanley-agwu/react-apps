import DisplayMovies from './components/DisplayMovies';
import Header from './components/Header';
import SearchMovies from './components/SearchMovies'

const Main = () => {
  return (
    <div className="container">
      <Header />
      <DisplayMovies />
      <SearchMovies />
    </div>
  );
}

export default Main;

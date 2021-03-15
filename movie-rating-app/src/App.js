import Header from './components/Header'
import AddMovie from './components/AddMovie';
import MoviesUI  from './components/MovieUI'

const App = () =>{
  return (
    <div className="App">
      <Header />
      <div className="inner-App">
        <MoviesUI />
        <AddMovie />
      </div>
             
    </div>
  )
}

export default App;

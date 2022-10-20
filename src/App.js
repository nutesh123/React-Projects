import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setmovies]=useState([])
  const [isloading ,setisloading]=useState(false)

  async function fetchmoviesHandler(){
    setisloading(true)
   const response= await fetch('https://swapi.dev/api/films')
   const data = await response.json() ; 
   
      const transformedMovies = data.results.map(moviedata =>{
        return{
          id:moviedata.episode_id,
          title:moviedata.title,
          openingText:moviedata.opening_crawl
        }
      })
      setmovies(transformedMovies)
      setisloading(false)
    }
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isloading && <MoviesList movies={movies} />}
      {isloading && <p>loding ....</p>}
      </section>
    </React.Fragment>
  );
  }

export default App;

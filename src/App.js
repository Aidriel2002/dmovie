import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import SearchIcon from './search.svg'
import './App.css';

const API_URL = "https://www.omdbapi.com?apikey=5cab2eae";

const App = () => {
  const [movies, setMovies] = useState("");
  const [movie, setMovie] = useState("");
  const [clicked, setClicked] = useState(null)

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  const searchMovie = async (id) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    console.log(data);
    setClicked(data);
  };

  useEffect(() => {
    searchMovies("The nun");
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("srchBtn").click();
    }
  };

  return (
    <div className='app'>
      {clicked && <MovieModal movie={clicked} setClicked={setClicked}/>}
      <div className="header">
        <h1><span> D'</span>movies</h1>
        <div className='search'>
          <input id="srchBar" placeholder='Search for movies...' onChange={(e) => setMovie(e.target.value)} onKeyPress={handleKeyPress} />
          <button id="srchBtn" onClick={() => searchMovies(movie)}><img src={SearchIcon} style={{width:"20px", height:"20px"}} alt='search'/> </button>
          
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((m) => (
            <MovieCard props={m} key={m.imdbID} searchMovie={searchMovie}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h3>No Movie Found!</h3>
        </div>
      )}
      </div>
  );
};

export default App;

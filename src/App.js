import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=5cab2eae";

const App = () => {
  const [movies, setMovies] = useState("");
  const [movie, setMovie] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
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
            <MovieCard props={m} key={m.imdbID} />
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

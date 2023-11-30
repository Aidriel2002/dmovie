export default function MovieModal({ movie, setClicked }) {
  return (
    <div className="modal-container">
      <div className="modal">
        
        <img src={movie.Poster} alt="poster" />
        <h1>{movie.Title}</h1>
        <div className="star">
        <p>{movie.Year} | {movie.Runtime} | {movie.imdbRating} <span>★</span></p>
        </div>
        <p>Genre: {movie.Genre}</p>
        <p className="plot">{movie.Plot}</p>
        <a href="https://www.youtube.com/watch?v=6_fNGTGPuVs" ><button className="mbttn"> Watch now</button></a>
        <button className="close-button" onClick={() => setClicked(null)}>
          Close
        </button>

      </div>
    </div>
  );
}

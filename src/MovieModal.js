export default function MovieModal({ movie, setClicked }) {
  return (
    <div className="modal-container">
      <div className="modal">
<<<<<<< HEAD
        <button className="close-button" onClick={() => setClicked(null)}>
          X
        </button>
        <img src={movie.Poster} alt="poster" />
        <h1>{movie.Title}</h1>
        <div className="star">
        <p>{movie.Year} | {movie.Runtime} | {movie.imdbRating} <span>★</span></p>
        </div>
        <p>Genre: {movie.Genre}</p>
        <p className="plot">{movie.Plot}</p>
        <button className="mbttn"> Watch now</button>

=======
        <img src={movie.Poster} alt="poster" onClick={() => setClicked(null)}/>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
>>>>>>> 94885e73b0d13fb6284ebfbaef0e16c9bf07f148
      </div>
    </div>
  );
}

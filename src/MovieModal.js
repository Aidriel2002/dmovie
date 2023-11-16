export default function MovieModal({ movie, setClicked }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <img src={movie.Poster} alt="poster" onClick={() => setClicked(null)}/>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}

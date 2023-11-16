function MovieCard({ props, searchMovie }) {
    return (
      <div className="moviecard" onClick={() => searchMovie(props.imdbID)}>
        <img src={props.Poster} alt="poster" />
        <h1>{props.Title}</h1>
        <div className="bttm">
          <p className="mtype">{props.Type}</p>
          <p className="myear">{props.Year}</p>
        </div>
      </div>
    );
  }
  export default MovieCard;
  
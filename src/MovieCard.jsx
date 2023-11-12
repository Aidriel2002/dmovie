function MovieCard({props}) {
    return (
        <div className="moviecard">
            <img src={props.Poster}/>
            <h1>{props.Title}</h1>
            <div className="bttm">
                <p className="mtype">{props.Type}</p>
                <p className="myear">{props.Year}</p>
            </div> 
            
        </div>
    );
}
export default MovieCard
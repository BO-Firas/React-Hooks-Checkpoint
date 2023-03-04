function MovieCard({ movie }) {
    const { title, description, posterURL, rating } = movie;
  
    return (
      <div className="movie-card">
        <img className="movie-poster" src={posterURL} alt={title} />
        <div className="movie-details">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-description">{description}</p>
          <p className="movie-rating">Rating: {rating}</p>
        </div>
      </div>
    );
  }
export default MovieCard;
import MovieCard from "./MovieCard";
function MovieList({ movies, filterTitle, filterRating }) {
    const filteredMovies = movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
      );
    });
  
    return (
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
export default MovieList;
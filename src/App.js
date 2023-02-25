import React, { useState } from 'react';
import './App.css';

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

function Filter({ onFilterTitle, onFilterRating }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleTitleChange = event => {
    setTitle(event.target.value);
    onFilterTitle(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
    onFilterRating(event.target.value);
  };

  return (
    <div className="filter">
      <input className="filter-title" type="text" placeholder="Filter by title" value={title} onChange={handleTitleChange} />
      <input className="filter-rating" type="number" placeholder="Filter by rating" value={rating} onChange={handleRatingChange} />
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://i.imgur.com/SuW2ZlC.jpg',
      rating: 9.3
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://i.imgur.com/Uzvny9I.jpg',
      rating: 9.2
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://i.imgur.com/3jLPB46.jpg',
      rating: 9.0
    }
  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleFilterTitleChange = value => {
    setFilterTitle(value);
  };

  const handleFilterRatingChange = value => {
    setFilterRating(value);
  };

  const handleAddMovie = () => {
    const title = prompt('Enter movie title:');
    const description = prompt('Enter movie description:');
    const posterURL = prompt('Enter movie poster URL:');
    const rating = parseFloat(prompt('Enter movie rating:'));

    if (title && description && posterURL && rating) {
      setMovies(movies => [...movies, { title, description, posterURL, rating }]);
}
};

return (
<div className="app">
<header className="app-header">
<img src="/logo.png" alt="Netflix" className="logo" />
</header>
<main className="app-content">
<Filter onFilterTitle={handleFilterTitleChange} onFilterRating={handleFilterRatingChange} />
<button className="add-movie-button" onClick={handleAddMovie}>Add movie</button>
<MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />
</main>
</div>
);
}

export default App;
import React, { useState } from 'react';

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
export default Filter
import React, {useState} from 'react';
// import React, { useState } from 'react';
import RatingChart from './components/RatingChart';
import RegenerateButton from './components/RegenerateButton';
import './App.css';

const App = () => {
  const initialRatings = [35, 50, 40, 22, 10];
  const [ratings, setRatings] = useState(initialRatings);

  const regenerateRatings = () => {
    const newRatings = ratings.map(() => Math.floor(Math.random() * 51));
    console.log({newRatings})
    setRatings(newRatings);
  };

  console.log('Current Ratings:', ratings);

  return (
    <div className="app">
      <RatingChart ratings={ratings} />
      <RegenerateButton onClick={regenerateRatings} />
    </div>
  );
};

export default App;

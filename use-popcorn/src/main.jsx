import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
// import './index.css';
import StarRating from './StarRating';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={['Terreble', 'Bad', "Okay", "Good", "Amazing"]}
    />
  </React.StrictMode>
);

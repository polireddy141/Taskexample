
import React, { useState } from 'react';
import './App.css';
import cardData from './data';
import ImageCard from './imagecard';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  
  const filteredCards = cardData.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Image Card Search</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="card-container">
        {filteredCards.map(card => (
          <ImageCard key={card.id} name={card.name} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;

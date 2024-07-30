import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'

function App() {

  const cardElements = data.map(card => {
    return (
      <Card 
        key={card.id}
        {...card}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="card-list">
        {cardElements}
      </div>
    </div>
  );
}

export default App;

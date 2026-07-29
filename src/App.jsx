import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './data.jsx'

// Renders the navbar and the list of destination cards, with the most recently added trip shown first
function App() {

  const cardElements = data.map(card => {
    return (
      <Card 
        key={card.id}
        {...card}
      />
    );
  });

  cardElements.reverse();

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

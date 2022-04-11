import {useState} from 'react'
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import './App.css';


function App() {
  // je crée un state
 const [quoteCard, setQuoteCard] = useState();

  const getQuote = () => {
    // Send the request
      axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=6')
      // Extract the DATA from the received response
      .then((res) => res.data)
      // j'extrait les donnée data
      .then((data) => {
       setQuoteCard(data[0])
      }
      )}
// je retourne mon composant avec ses props et j'ajoute un bouton qui agis sur le state
  return (
    <div className="App">
      <QuoteCard 
      {...quoteCard}
      />
      <button type="button" onClick={()=>getQuote()}>Get quote</button>
    </div>

  )};

export default App;
import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, character, image }) => {
  console.log(quote)
return (
 
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
)
};

export default QuoteCard;
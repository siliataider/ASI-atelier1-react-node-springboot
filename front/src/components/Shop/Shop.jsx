import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCard } from '../../slices/shopSlice';
import Card from '../Card/Card';

const Shop = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shop.cards);
  const currentCard = useSelector((state) => state.shop.currentCard);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleCardClick = (card) => {
    dispatch(setCurrentCard(card));
    setShowCardDetails(true);
  };

  const handleBuyClick = () => {
    alert(`Buy card with ID: ${currentCard.id}`);
  };

  return (
    <div>
      <h2>Card Shop</h2>
      {showCardDetails && currentCard ? (
        <div>
          <h3>Card Details</h3>
          <div className="card-detail-container">
          <Card card = {currentCard} showCardDetails = {showCardDetails}/>
          <button onClick={handleBuyClick}>Buy</button>
          <br></br>
          </div>
        </div>
      ) : (
        <div className="card-container">
          {cards.map((card) => (
            <div className="card" key={card.id} onClick={() => handleCardClick(card)}>
              <Card card = {card} showCardDetails = {showCardDetails}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
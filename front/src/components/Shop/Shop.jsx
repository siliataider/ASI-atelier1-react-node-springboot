import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCard } from '../../slices/shopSlice';
import Card from '../Card/Card';

const Shop = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.shop.cards);

  const handleCardClick = (card) => {
    dispatch(setCurrentCard(card));
  };

  return (
    <div>
      <h2>Card Shop</h2>
      {cards.map((card) => (
        <div key={card.id} onClick={() => handleCardClick(card)}>
          <Card id={card.id} description={card.description} />
        </div>
      ))}
    </div>
  );
};

export default Shop;

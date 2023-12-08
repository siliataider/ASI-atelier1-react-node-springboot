import React from 'react';
import { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';

const Inventory = () => {

  const [userCards, setUserCards] = useState([]);
  const cards = useSelector((state) => state.shop.cards);//TODO: remove when backend connexion

  useEffect(() => {
    const getUserCards = async () => {
      try {
        const response = await fetch('http://localhost:80/cards');
        if (!response.ok) {
          throw new Error('Failed to fetch user cards');
        }
        const jsonUserCards = await response.json();
        console.log(jsonUserCards)
        setUserCards(jsonUserCards);
      } catch (error) {
        console.error('Erreur lors de la récupération des données GET:', error);
      }
    };

    getUserCards()
  }, []); // Le tableau vide signifie que useEffect ne s'exécutera qu'une fois, équivalent à componentDidMount


  return (
    <div>
      <h2>Inventory</h2>
      {userCards.map((card) => (
        <div key={card.id}>
          <Card card = {card} showCardDetails = {true} />
          <button className='btn btn-info pb-1'>Sell</button>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
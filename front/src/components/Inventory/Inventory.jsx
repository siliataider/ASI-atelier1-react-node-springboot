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
        // TODO remove comment when api
        //const response = await fetch('http://localhost:8082/getUserCards');
        //if (!response.ok) {
        //  throw new Error('Failed to fetch user cards');
        //}
        //const jsonUserCards = await response.json();
        setUserCards(cards);
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
          <Card id={card.id} description={card.description} />
        </div>
      ))}
      <button className='btn btn-info pb-1'>Sell</button>
    </div>
  );
};

export default Inventory;
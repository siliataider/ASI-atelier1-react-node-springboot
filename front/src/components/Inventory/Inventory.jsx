import React from 'react';
import { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';

const Inventory = () => {

  const [userCards, setUserCards] = useState([]);
  const currentUserId = useSelector((state) => state.auth.currentUserId);

  const getUserCards = async () => {
    try {
      const response = await fetch(`${config.BASE_URL}/cards_to_sell`);
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

  useEffect(() => {
    getUserCards()
  }, []); // Le tableau vide signifie que useEffect ne s'exécutera qu'une fois, équivalent à componentDidMount
  
  const handleSellClick = async (currentCard) => {
  
    if (!currentCard.id || !currentUserId) {
      alert('No card selected or user ID not found!');
      return;
    }
  
    const order = {
      user_id: parseInt(currentUserId),
      card_id: parseInt(currentCard.id)
    };
  
    try {
      const response = await fetch(`${config.BASE_URL}/sell`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
  
      if (!response.ok) {
        throw new Error('Failed to sell card');
      }
  
      const purchaseSuccess = await response.json();
      if (purchaseSuccess) {
        await getUserCards();
        alert(`Successfully sell with ID: ${currentCard.id}`);
      } else {
        alert('Failed to sell card. Please try again.');
      }
  
    } catch (error) {
      console.error('Error during sell card request:', error);
      alert('Failed to sell card');
    }
  };  

  return (
    <div>
      <h2>Inventory</h2>
      {userCards.map((card) => (
        <div key={card.id}>
          <Card card = {card} showCardDetails = {true} />
          <button className='btn btn-info pb-1' onClick={() => handleSellClick(card)} >Sell</button>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
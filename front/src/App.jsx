import { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/Forms/LoginForm'
import SignupForm from './components/Forms/SignupForm'
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory'
import Card from './components/Card/Card'
import * as jsonSource from './sources/cards.json';
import { loadCards } from './slices/shopSlice';
import { logout } from './slices/authSlice';


import './App.css'

function App() {
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cards = useSelector((state) => state.shop.cards);
  const [loadShopOrInv, setShopOrInv] = useState(false);

  const handleLoginClick = () => {
      setShowLogin(true);
      setShowSignup(false);
      setShowButtons(false);
    };

  const handleSignupClick = () => {
      setShowLogin(false);
      setShowSignup(true);
      setShowButtons(false);
    };

 const handleGoBack = () => {
     setShowLogin(false);
     setShowSignup(false);
     setShowButtons(true);
     dispatch(logout());
   };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowButtons(false);
    dispatch(loadCards(jsonSource.default));
  };

  const handleLoadInventory = () => {
    setShopOrInv(!loadShopOrInv);
  };

  useEffect(() => {
    console.log('hello this is useEffect')
    if (isLoggedIn) {
      handleLoginSuccess();
    }
  }, [isLoggedIn]);

  return (
    <>   
          <h1>Welcome to G5's Card Shop!</h1>
          <p className="read-the-docs">
            Create your account and discover our endless inventory!
          </p>
          <div className="main">
           {showButtons && (
           <>
            <div>
              <button onClick={handleSignupClick}>Sign up</button>
            </div>
            <br></br>
            <div>
              <button onClick={handleLoginClick}>Log in</button>
            </div>
            </>
            )}

          {showLogin && (
            <div>
              <LoginForm/>
              <br></br>
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          )}

          {showSignup && (
            <div>
              <SignupForm/>
              <br></br>
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          )}

          {isLoggedIn && (
            <div>
              { loadShopOrInv
                ? <Inventory />
                : <Shop />
              }
              <br></br>
              <button onClick={handleGoBack}>Log out</button>
            </div>
          )}
        </div>
        {isLoggedIn && (
            <div>
              { loadShopOrInv
                ? <button onClick={handleLoadInventory}>Shop</button>
                : <button onClick={handleLoadInventory}>Inventory</button>
              }
            
            </div>
          )}
        </>
  )
}

export default App
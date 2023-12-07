import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginForm from './components/Forms/LoginForm'
import SignupForm from './components/Forms/SignupForm'
import Shop from './components/Shop/Shop'
import Card from './components/Card/Card'
import * as jsonSource from './sources/cards.json';

import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cards, setCards] = useState(jsonSource.cards);

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
     setIsLoggedIn(false)
   };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

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
              <Shop />
              <button onClick={handleGoBack}>Log out</button>
            </div>
          )}

        </div>
        </>
  )
}

export default App
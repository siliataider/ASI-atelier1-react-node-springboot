import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

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
   };

  return (
    <>
          <h1>Welcome to G5's Card Shop!</h1>
          <p className="read-the-docs">
            Create your account and discover our endless inventory!
          </p>
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
        </>
  )
}

export default App

/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
 */
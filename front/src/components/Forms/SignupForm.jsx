// SignupForm.jsx
import { useState, useEffect  } from 'react';

const SignupForm = () => {
  const [new_username, setNewUsername] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [last_name, setLastName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async () => {
    try {
      const data = {
        login: new_username,
        pwd: new_password,
        lastName: last_name,
        surName: surname,
        email: email,
        account: 100.0,
        cardList: []
      };

      const response = await fetch('http://localhost:80/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données POST');
      }

      const jsonData = await response.json();
      console.log(jsonData)
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données POST:', error);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    if (new_username && new_password && last_name && surname && email) {
      const data = {
        login: new_username,
        pwd: new_password,
        lastName: last_name,
        surName: surname,
        email: email,
      };
      console.log('Signing up with:', data);   
      createUser();
    } else {
      alert('Fill all the fields or I will raise the cards price!')
    }
  };
  

  return (
    <div>
      <h2>Signup Form</h2>
      <form>
      <div className="main" >
        <div className="mb-3">
          <label htmlFor="newUsername" className="form-label">
            New Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="newUsername"
            value={new_username}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={new_password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Surname:
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={surname}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="button"
          
          onClick={handleSignup}
        >
          Let's go!
        </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

/*
className="btn btn-primary"
*/
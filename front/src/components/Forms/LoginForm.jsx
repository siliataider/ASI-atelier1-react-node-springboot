// LoginForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../slices/authSlice';

const LoginForm = () => {
  const [username_input, setUsername] = useState('');
  const [password_input, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username_input && password_input) {

      const isAuthenticated = true;

      const data = {
        username: username_input,
        password: password_input
      };
      console.log('Logging in with:', data);

      if (isAuthenticated) {
        dispatch(loginSuccess()); // Dispatch action indicating successful login
      } else {
        setError('Invalid credentials');
      }

    } else {
      alert('Dont be silly, fill in all the fields or I will delete your money!')
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
           <form>
           <div className="main" >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="username"
                  value={username_input}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  value={password_input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
              >
                Let's go!
              </button>
            </div>
            </form>
    </div>
  );
};

export default LoginForm;
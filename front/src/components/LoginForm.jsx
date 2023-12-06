// LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [username_input, setUsername] = useState('');
  const [password_input, setPassword] = useState('');

  const handleLogin = () => {
    const data = {
      username: username_input,
      password: password_input
      };
    console.log('Logging in with:', data);
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
                  type="password"
                  className="form-control"
                  id="password"
                  value={password_input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
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
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setMessage('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setMessage('');
  };

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setMessage('Please provide valid login details');
    } else if (!validateEmail(email)) {
      setMessage('Invalid email.');
    } else if (!validatePassword(password)) {
      setMessage('Invalid Password');
    } else {
      setMessage('Login successful');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">UserName: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
          {message && <span className="message">{message}</span>}
        </div>
        <button type="button" className="btn-login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;















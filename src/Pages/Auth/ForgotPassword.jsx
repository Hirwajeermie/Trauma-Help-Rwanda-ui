import React, { useState } from 'react';
import './ForgotPassword.css';
import { forgotPassword } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);  

    try {
      const response = await forgotPassword(email);
      setMessage(response.message || 'Reset link sent successfully. Please check your email.');
      setTimeout(() => navigate('/forgot-password'), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>

        <div className="form-group">
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              Sending Reset Link... <span className="spinner"></span>
            </>
          ) : (
            "Send Reset Link"
          )}
        </button>

        {message && <p className="response-message">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;

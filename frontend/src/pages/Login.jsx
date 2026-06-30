import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ShieldAlert, KeyRound, Dna } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  // Custom hook for the 3D floating effect on the login card
  const { style, handleMouseMove, handleMouseLeave } = use3DTilt(12, 1.02);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Task 1 Validation: Password length must be at least 6 characters
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate connection lag for premium transition timing
    setTimeout(() => {
      setIsLoading(false);
      // Task 2: Pass data from Login to Dashboard using state
      navigate('/dashboard', { state: { email } });
    }, 800);
  };

  return (
    <div className="login-container">
      {/* 3D Background decorations */}
      <div className="perspective-grid"></div>
      <div className="floating-sphere sphere-1"></div>
      <div className="floating-sphere sphere-2"></div>
      <div className="floating-sphere sphere-3"></div>

      {/* Interactive 3D Login Panel */}
      <div
        className="login-card"
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="login-card-inner">
          <div className="brand-logo">
            <div className="logo-icon-wrapper">
              <Dna className="logo-icon animate-pulse" size={36} />
            </div>
            <h1 className="brand-name">FutureDNA</h1>
            <p className="brand-tagline">Secure Authentication Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  id="email"
                  placeholder="name@futuremail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Security Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Task 1: Red error message for invalid password length */}
            {error && (
              <div className="error-alert">
                <ShieldAlert className="error-icon" size={16} />
                <span className="error-text">{error}</span>
              </div>
            )}

            <button
              type="submit"
              className={`submit-btn ${isLoading ? 'btn-loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <KeyRound size={18} className="btn-icon" />
                  <span>Authenticate Session</span>
                </>
              )}
            </button>
          </form>

          <div className="card-footer">
            <span>Level 3 Encryption Active</span>
          </div>
        </div>
        {/* Glow sheen */}
        <div className="login-card-sheen" />
      </div>
    </div>
  );
}

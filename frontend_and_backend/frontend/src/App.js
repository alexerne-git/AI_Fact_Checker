import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState('This is the initial text to copy.');

  const handleInputChange = (event) => {
    setDisplayText(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Copy-Paste App</h1>
      <div className="copy-paste-box">
        <div className="display-text">{displayText}</div>
      </div>
      <p>Enter your text below:</p>
      <textarea
        rows="4"
        cols="50"
        value={displayText}
        onChange={handleInputChange}
        className="input-textarea"
      />
    </div>
  );
}

export default App;

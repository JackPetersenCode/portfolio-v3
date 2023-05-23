import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="form-group">
      <label
        className={isFocused || email ? 'floating-label active' : 'floating-label'}
        htmlFor="emailInput"
      >
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="emailInput"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default EmailInput;





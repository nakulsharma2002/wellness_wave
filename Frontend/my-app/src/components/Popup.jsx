// Popup.js
import React from 'react';
import Register from './Register';
import SignIn from './SignIn';


const Popup = ({ page, onClose, onSwitchPage , setweather , setfirstname , setlastname }) => {
  
  return (
    <div>
      {page === 'register' && <Register  setweather={setweather} setfirstname={setfirstname} setlastname={setlastname} onClose={onClose} onSignInClick={() => onSwitchPage('signin')} />}
      {page === 'signin' && <SignIn onClose={onClose} onRegisterClick={() => onSwitchPage('register')} />}
    </div>
  );
};

export default Popup;

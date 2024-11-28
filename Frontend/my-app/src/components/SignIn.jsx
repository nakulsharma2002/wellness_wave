// SignIn.js
import React, { useState } from 'react';
// import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\App.css'


const SignIn = ({ onClose, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in submitted', { email, password });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-contents" style={{height:'385px',backgroundColor:'white',width:'853px',padding:'20px',borderRadius:'5px',position:'relative',zIndex:'9999'}}>
        <button className="close-button" onClick={onClose} style={{color:'black'}}>X</button>
        <div style={{display:'flex',width:'100%'}} className='over'>
        <div style={{width:'50%',display:'flex'}} className='done'>
            <div style={{width:'100%'}} className='combine'> 
              <h2>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" style={{display:'flex',width:'100%',justifyContent:'center'}} className='submit'>Sign In</button>
              </form>
              <button className="social-button" style={{width:'100%',paddingLeft:'12px'}}><img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{ height: '24px', width: '10%'}} alt='1' />Sign up with Facebook</button>
              <button className="social-button" style={{width:'100%',paddingLeft:'12px'}}><img  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{ height: '24px', width: '10%' }} alt='1' />Sign up with Google</button>
          </div>
        </div>
        <div style={{paddingLeft:'64px'}}>
        <div style={{width:'100%',height:'600px'}}>
          <p style={{paddingTop:'51px'}}>
          Don't have an account? <span className="signin-link" onClick={onRegisterClick}>Create Account</span>
          </p>
          <img  className="background-img"  style={{height:'254px',width:'100%'}}  src={`${process.env.PUBLIC_URL}/Images/apple.jpg`}></img>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SignIn;

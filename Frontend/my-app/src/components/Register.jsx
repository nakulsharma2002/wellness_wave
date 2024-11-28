import React, { useState } from 'react';



const Register = ({onClose,onSignInClick,setweather,setfirstname,setlastname}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [dangermessage , setdangermessage]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setfirstname(firstName);
    setlastname(lastName);

    if(password.length >= 8){
      fetch('http://localhost:5000/wellness_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Set content-type to JSON
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          city: city,
        }),
        
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(`Error: ${data.error}`);
        } else {
          // Handle success - maybe show a success message or redirect
          alert('User created successfully!');
        }
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
     
      
      
      // Fetch weather after user creation
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=085ccc4a0fbb965caa669d173e6595e7&units=metric`)
        .then((res) => res.json())
        .then((finalRes) => {
          if (finalRes.cod === '404') {
            alert("Error in fetching the data");
          } else {
            setweather(finalRes);
          }
        });
    }
    else {
      setPassword('');
      setdangermessage(true);
    }
};

  
  return (
    <>
    {dangermessage && (
      <div class="alert alert-danger" role="alert" style={{top:'10px',position:'absolute',left:'539px'}} >
        Please make sure your password lenght more than 8 character
      </div>
      )}
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose} style={{ color: 'black' }}>X</button>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <h2>Create Account</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
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
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <button type="submit" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>Create Account</button>
              </form>
              <button className="social-button" style={{ width: '100%', paddingLeft: '12px' }}>
                <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{ height: '24px', width: '10%' }} alt='1' />Sign up with Facebook
              </button>
              <button className="social-button" style={{ width: '100%', paddingLeft: '12px' }}>
                <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{ height: '24px', width: '10%' }} alt='1' />Sign up with Google
              </button>
            </div>
            <div style={{ width: '50%', height: '600px' }}>
              <p style={{ paddingTop: '51px' }}>
                Already have an account? <span className="signin-link" onClick={onSignInClick}>Sign In</span>
              </p>
              <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} alt='Chatting' className='register-image' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

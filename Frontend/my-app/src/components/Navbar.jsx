import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';


const Navbar = ({firstname , weather , setweather , setfirstname , setlastname}) => {

  return (
    <>
      <nav>
        <Navbar_Values firstname={firstname} weather={weather} setweather={setweather} setfirstname={setfirstname} setlastname={setlastname}/>
      </nav>
    </>
  );
};

export default Navbar;

function Navbar_Values({firstname , weather , setweather , setfirstname , setlastname}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPage, setPopupPage] = useState('register');

  const handleOpenPopup = (page) => {
    setPopupPage(page);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/nutrition">Nutrition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/excersie">Excersie</Link>
            </li>
            
          </ul>
        <div className="App" style={{ display: 'flex', width: '10%', height: '40px', flexWrap: 'wrap'}}>
        <header className="App-header" style={{ padding: '0px', height: '0px', width: '133px', backgroundColor: '#f4f4ff', minHeight: '6vh' }}>
          <button style={{ fontSize: '12px', height: '36px', width: '124px' }} onClick={() => handleOpenPopup('register')} className="AppButton">Create Account</button>
        </header>
        {showPopup && <Popup page={popupPage} setweather={setweather} onClose={handleClosePopup} onSwitchPage={handleOpenPopup} setfirstname={setfirstname} setlastname={setlastname}/>}
      </div>
        </div>
      </div>
      
      <div style={{fontSize:'23px',fontWeight:'600'}}>
        {firstname}
      </div>
      <div style={{width:'158px',textAlign:'center',paddingLeft:'1px'}}>
        {weather ? (
          <div style={{width:'156px'}}>
            <h4>{weather.name}</h4>
            <h6>{Number(weather.main.temp)}°C</h6>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </nav>
  );
}

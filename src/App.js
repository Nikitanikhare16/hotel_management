import { useEffect, useState } from 'react';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import LoginPopup from './component/LoginPopup';
import HomePage from "./Pages/HomePage";
import { useSelector } from 'react-redux';
 import HotelBookingPage from "./Pages/HotelBookingPage";
 import CreateAccountPages from "./Pages/CreateAccountPages";

function App() {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
 const [showLoginPopup,setShowLoginPopup] = useState(false);
 useEffect(()=> {
  if (!isAuthenticated) {
    setShowLoginPopup(true);
  }
 },[isAuthenticated]);

 
const handleClosePopup = ()=>{
  setShowLoginPopup(false);
}
  return (
    <div>
<Router>
  <div>
    <Navbar>
      {showLoginPopup && <LoginPopup onClose={handleClosePopup} ></LoginPopup>}
      <Routes>
        <Route path="/" element={HomePage}>
        </Route>
        <Route path="/create-account" element={CreateAccountPages}>
        </Route> 
        <Route path="/hotel-booking" element={HotelBookingPage}>
        </Route>
      </Routes>
    </Navbar>
  </div>
</Router>
    </div>
  );
}

export default App;

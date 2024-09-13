import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import AppNavbar from './components/Navbar';  
import WeatherComponent from './components/WeatherComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/WeatherComponent';


function App() {
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  return (
    <Router>
      <div className="App">
        <AppNavbar
          setLocation={setLocation} 
          setLatitude={setLatitude} 
          setLongitude={setLongitude}
          setWeatherData={setWeatherData} />
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <WeatherComponent 
              weatherData={weatherData}
            />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

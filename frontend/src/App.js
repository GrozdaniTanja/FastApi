import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppNavbar from './components/Navbar'
import WeatherComponent from './components/WeatherComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <Router>
      <div className="App">
        <AppNavbar setWeatherData={setWeatherData} />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={<WeatherComponent weatherData={weatherData} />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App

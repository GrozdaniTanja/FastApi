import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Remove 'Switch', not needed in React Router v6
import './App.css';
import AppNavbar from './components/Navbar';  // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}


const Home = () => <div>Home Page</div>;

export default App;

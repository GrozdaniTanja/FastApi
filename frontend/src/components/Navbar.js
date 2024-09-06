import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import './Navbar.css';

const AppNavbar = () => {
    const [location, setLocation] = useState('');
    const [currentLocation, setCurrentLocation] = useState('Fetching location...');

    const fetchCurrentLocation = async () => {
        try {
            const response = await fetch('http://localhost:8000/current-location');
            const data = await response.json();

            const { location: { city_name, country } } = data;
            setCurrentLocation(`${city_name}, ${country}`);
        } catch (error) {
            console.log('Error fetching current location:', error);
            setCurrentLocation('Location not available');
        }
            
    };

    useEffect(() => {
        fetchCurrentLocation();
    }, []);
    
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSearch = () => {
        if (location) {
            setCurrentLocation(location);
            // Call backend to get weather/air pollution based on the location
            // fetchWeatherAndPollutionData(location);
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Nav className="nav-right">
                <Navbar.Brand href="#" className="text-white brand">Weather & Pollution App</Navbar.Brand>
            </Nav>
            <Nav className="nav-center">
                <Form inline className="search-form d-flex">
                    <FormControl
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={handleLocationChange}
                        className="search-input"
                    />
                    <Button variant="outline-light" onClick={handleSearch} className="search-button">
                        <FaSearch />
                    </Button>
                </Form>
            </Nav>
            <Nav className="nav-left">
                <div className="current-location d-flex align-items-center">
                    <CiLocationOn className="location-icon" />
                    <span>{currentLocation}</span>
                </div>
            </Nav>
        </Navbar>
    );
};

export default AppNavbar;

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import './Navbar.css';

const AppNavbar = ({ setLocation, setLatitude, setLongitude, setWeatherData }) => {
    const [location, setLocationInput] = useState('');
    const [currentLocation, setCurrentLocation] = useState('Fetching location...');
    const [latitude, setLat] = useState(null);
    const [longitude, setLon] = useState(null);

    const fetchCurrentLocation = async (lat, lon) => {
        try {
            const response = await fetch(`http://localhost:8000/current-location?latitude=${lat}&longitude=${lon}`);
            const data = await response.json();
            const { city, country, weather, pollution } = data;
            setCurrentLocation(`${city}, ${country}`);
            setWeatherData({ city, country, weather, pollution });
        } catch (error) {
            console.log('Error fetching current location:', error);
            setCurrentLocation('Location not available');
        }
    };

    const fetchSerchLocation = async (city_name) => {
        try {
            const response = await fetch(`http://localhost:8000/location/${city_name}`);
            const data = await response.json();
            const { city, country, weather, pollution } = data;
            setCurrentLocation(`${city}, ${country}`);
            setWeatherData({ city, country, weather, pollution });
        } catch (error) {
            console.log('Error fetching current location:', error);
            setCurrentLocation('Location not available');
        }
    };


    const getGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLat(latitude);
                    setLon(longitude);
                    fetchCurrentLocation(latitude, longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setCurrentLocation('Location access denied');
                }
            );
        } else {
            setCurrentLocation('Geolocation is not supported by the browser');
        }
    };

    useEffect(() => {
        getGeolocation(); 
    }, []);

    const handleLocationChange = (e) => {
        setLocationInput(e.target.value);
    };

    const handleSearch = () => {
        if (location) {
            fetchSerchLocation(location);
        } else {
            if (latitude, longitude) {
                fetchCurrentLocation(latitude, longitude)
            } else {
                setCurrentLocation('Fetching location...');
                getGeolocation();
            }
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

import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import PropTypes from 'prop-types'
import './Navbar.css'

const AppNavbar = ({ setWeatherData }) => {
  const [location, setLocationInput] = useState('')
  const [currentLocation, setCurrentLocation] = useState('')
  const [latitude, setLat] = useState(null)
  const [longitude, setLon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCurrentLocation = async (lat, lon) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `http://localhost:8000/current-location?latitude=${lat}&longitude=${lon}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch location data')
      }
      const data = await response.json()
      const { city, country, weather, pollution } = data
      setCurrentLocation(`${city}, ${country}`)
      setWeatherData({ city, country, weather, pollution })
    } catch (error) {
      console.error('Error fetching current location:', error)
      setError('Error fetching current location')
      setCurrentLocation('Location not available')
    } finally {
      setLoading(false)
    }
  }

  const fetchSearchLocation = async (city_name) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `http://localhost:8000/location/${city_name}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch searched location')
      }
      const data = await response.json()
      const { city, country, weather, pollution } = data
      setCurrentLocation(`${city}, ${country}`)
      setWeatherData({ city, country, weather, pollution })
    } catch (error) {
      console.error('Error fetching searched location:', error)
      setError('Error fetching searched location')
      setCurrentLocation('Location not available')
    } finally {
      setLoading(false)
    }
  }

  const getGeolocation = () => {
    setLoading(true)
    setError(null)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLat(latitude)
          setLon(longitude)
          fetchCurrentLocation(latitude, longitude)
        },
        (error) => {
          console.error('Error getting location:', error)
          setError('Location access denied')
          setCurrentLocation('Location access denied')
          setLoading(false)
        },
      )
    } else {
      setError('Geolocation not supported')
      setCurrentLocation('Geolocation is not supported by the browser')
      setLoading(false)
    }
  }

  useEffect(() => {
    getGeolocation()
  }, [])

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value)
  }

  const handleSearch = () => {
    if (location) {
      fetchSearchLocation(location)
    } else {
      if (latitude && longitude) {
        fetchCurrentLocation(latitude, longitude)
      } else {
        getGeolocation()
      }
    }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Nav className="nav-right">
        <Navbar.Brand href="#" className="text-white brand">
          Weather & Pollution App
        </Navbar.Brand>
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
          <Button
            variant="outline-light"
            onClick={handleSearch}
            className="search-button"
          >
            <FaSearch />
          </Button>
        </Form>
      </Nav>
      <Nav className="nav-left">
        <div className="current-location d-flex align-items-center">
          <CiLocationOn className="location-icon" />
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <span>{currentLocation}</span>
          )}
        </div>
      </Nav>
    </Navbar>
  )
}

AppNavbar.propTypes = {
  setWeatherData: PropTypes.func.isRequired,
}

export default AppNavbar

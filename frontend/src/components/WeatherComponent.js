import React from 'react'
import './WeatherComponent.css'
import PropTypes from 'prop-types'

const WeatherComponent = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>
  }

  return (
    <div className="weather-container">
      <div className="weather-main">
        <div className="temperature">
          {weatherData.weather.temperature_celsius}°C
        </div>
        <div className="feels-like">
          Max Temp: {weatherData.weather.max_temperature_celsius}°C
        </div>
        <div className="feels-like">
          Min Temp: {weatherData.weather.min_temperature_celsius}°C
        </div>
        <div className="condition">{weatherData.weather.description}</div>
      </div>

      <div className="weather-details">
        <div className="detail">
          <span>💧Precipitation: </span>
          {weatherData.weather.precipitation} mm/h
        </div>
        <div className="detail">
          <span>💨 Wind Speed: </span>
          {weatherData.weather.wind_speed_mph} mph
        </div>
        <div className="detail">
          <span>💧 Humidity:</span>
          {weatherData.weather.humidity_percent} %
        </div>
        <div className="detail">
          <span>☁️ Cloud Cover:</span>
          {weatherData.weather.cloud_cover_percent} %
        </div>
        <div className="detail">
          <span>👁️ Visibility: </span>
          {weatherData.weather.visibility_km} mi
        </div>
      </div>
      <div className="pollution-details">
        <h3>Air Quality and Pollution</h3>
        <div className="detail">
          <span>🌫️ Airq: </span>
          {weatherData.pollution.air_quality_index}
        </div>
        <div className="detail">
          <span>CO: </span>
          {weatherData.pollution.carbon_monoxide} µg/m³
        </div>
        <div className="detail">
          <span>NO: </span>
          {weatherData.pollution.nitric_oxide} µg/m³
        </div>
        <div className="detail">
          <span>NO₂: </span>
          {weatherData.pollution.nitrogen_dioxide} µg/m³
        </div>
        <div className="detail">
          <span>O₃: </span>
          {weatherData.pollution.ozone} µg/m³
        </div>
        <div className="detail">
          <span>SO₂: </span>
          {weatherData.pollution.sulfur_dioxide} µg/m³
        </div>
        <div className="detail">
          <span>PM₂.₅: </span>
          {weatherData.pollution.pm2_5} µg/m³
        </div>
        <div className="detail">
          <span>PM₁₀: </span>
          {weatherData.pollution.pm10} µg/m³
        </div>
        <div className="detail">
          <span>NH₃: </span>
          {weatherData.pollution.ammonia} µg/m³
        </div>
      </div>
    </div>
  )
}

WeatherComponent.propTypes = {
  weatherData: PropTypes.shape({
    weather: PropTypes.shape({
      temperature_celsius: PropTypes.number,
      max_temperature_celsius: PropTypes.number,
      min_temperature_celsius: PropTypes.number,
      description: PropTypes.string,
      precipitation: PropTypes.number,
      wind_speed_mph: PropTypes.number,
      humidity_percent: PropTypes.number,
      cloud_cover_percent: PropTypes.number,
      visibility_km: PropTypes.number,
    }),
    pollution: PropTypes.shape({
      air_quality_index: PropTypes.number,
      carbon_monoxide: PropTypes.number,
      nitric_oxide: PropTypes.number,
      nitrogen_dioxide: PropTypes.number,
      ozone: PropTypes.number,
      sulfur_dioxide: PropTypes.number,
      pm2_5: PropTypes.number,
      pm10: PropTypes.number,
      ammonia: PropTypes.number,
    }),
  }),
}

WeatherComponent.defaultProps = {
  weatherData: {
    weather: {
      temperature_celsius: 0,
      max_temperature_celsius: 0,
      min_temperature_celsius: 0,
      description: '',
      precipitation: 0,
      wind_speed_mph: 0,
      humidity_percent: 0,
      cloud_cover_percent: 0,
      visibility_km: 0,
    },
    pollution: {
      air_quality_index: 0,
      carbon_monoxide: 0,
      nitric_oxide: 0,
      nitrogen_dioxide: 0,
      ozone: 0,
      sulfur_dioxide: 0,
      pm2_5: 0,
      pm10: 0,
      ammonia: 0,
    },
  },
}

export default WeatherComponent

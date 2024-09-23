# Weather and Air Pollution Dashboard

## Overview

A web application that displays current weather and air pollution levels for a user's location. Users can also search for locations by name. The application utilizes the OpenWeatherMap Current Weather API and Air Pollution API.

## Features

- Automatic weather and air pollution data based on the user's location.
- Search functionality for any location worldwide.
- Real-time data updates for accurate weather and air quality monitoring.

## Technologies

- **Backend**: FastAPI
- **Frontend**: React.js
- **APIs**: OpenWeatherMap Current Weather API, Air Pollution API
- **Containerization**: Docker & Docker Compose

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/GrozdaniTanja/FastApi.git
   ```

2. Install dependencies:

   ```bash
   poetry install
   ```

3. Create a `.env` file with your API keys:

   ```env
   AIR_POLLUTION_URL=http://api.openweathermap.org/data/2.5/air_pollution
   WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
   API_KEY=your_openweathermap_api_key
   GEOCODING_API_URL=http://api.openweathermap.org/geo/1.0/direct
   GEOCODING_REVERSE_API_URL=http://api.openweathermap.org/geo/1.0/reverse

   ```

4. Start the FastAPI server:
   ```bash
   poetry run uvicorn app.main:app --reload
   ```

5. Start the React frontend:
   ```bash
   cd frontend
   npm install
   npm start

   ```
### Docker Setup

   1. Ensure Docker and Docker Compose are installed on your system.
   2. To start the entire application using Docker Compose, simply run:

   ```bash
   docker-compose up
   ```
This will automatically start both the FastAPI backend and the React frontend.

## Usage

- Access the FastAPI backend at http://127.0.0.1:8000.
- Access the React frontend at http://127.0.0.1:3000.

## API Endpoints

- **GET /weather**: Retrieves current weather data.
- **GET /air-pollution**: Retrieves air pollution data.
- **GET /location/{city_name}**: Retrieves weather and air pollution data for the specified city
- **GET /current-location:** Retrieves data based on the user's current location.


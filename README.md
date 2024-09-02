# Weather and Air Pollution Dashboard

## Overview

A web application to display current weather and air pollution levels for a user's location. Users can also search for locations by name. Utilizes the Current Weather API and Air Pollution API.

## Features

- Automatic weather and air pollution data based on user's location.
- Search functionality for any location.
- Real-time data updates.

## Technologies

- **Backend**: FastAPI
- **Frontend** (optional): React.js
- **APIs**: OpenWeatherMap Current Weather API, Air Pollution API

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/weather-air-pollution-dashboard.git
   cd weather-air-pollution-dashboard
   ```

2. Install dependencies:

   ```bash
   poetry install
   ```

3. Create a `.env` file with your API keys:

   ```env
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the FastAPI server:
   ```bash
   poetry run uvicorn app.main:app --reload
   ```

## Usage

- Access the app at `http://127.0.0.1:8000`.

## API Endpoints

- **GET /weather**: Current weather data.
- **GET /air-pollution**: Air pollution data.
- **GET /search?location={location_name}**: Data for a specified location.

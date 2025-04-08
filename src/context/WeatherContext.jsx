import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();


export function WeatherProvider({ children }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=13f05e46774d37838f86fc258065d5e6&units=metric`
      );
      setWeather(res.data);
      setCity(cityName);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const addToFavorites = (cityName) => {
    if (!favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
    }
  };

  return (
    <WeatherContext.Provider value={{
      city,
      setCity,
      weather,
      fetchWeather,
      favorites,
      addToFavorites
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

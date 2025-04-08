import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import FavoriteCities from './components/FavoriteCities';

function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col md:flex-row h-screen p-4 bg-blue-50">
        <div className="md:w-1/3 p-4">
          <SearchBar />
          <FavoriteCities />
        </div>
        <div className="md:w-2/3 p-4">
          <CurrentWeather />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;

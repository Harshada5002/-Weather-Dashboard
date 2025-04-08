import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';

function CurrentWeather() {
  const { weather, addToFavorites } = useContext(WeatherContext);

  if (!weather) return <p></p>;

  return (
    <div>
      <WeatherCard data={weather} />
      <button
        onClick={() => addToFavorites(weather.name)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default CurrentWeather;

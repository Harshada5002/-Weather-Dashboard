import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function FavoriteCities() {
  const { favorites, fetchWeather } = useContext(WeatherContext);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Favorite Cities</h3>
      <ul className="space-y-2">
        {favorites.map((city, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-600 underline"
            onClick={() => fetchWeather(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCities;

import { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function SearchBar() {
  const [input, setInput] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = () => {
    if (input) fetchWeather(input);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 p-2 border rounded"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;

function WeatherCard({ data }) {
    return (
      <div className="p-4 border rounded bg-white shadow">
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Condition: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
      </div>
    );
  }
  
  export default WeatherCard;
  
function CityCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>Weather in {weather.title}</h2>
    </div>
  )
}

export default CityCard;

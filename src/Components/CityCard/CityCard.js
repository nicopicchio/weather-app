function CityCard({ weather }) {
	if (!weather) return <h2>Loading data...</h2>;
	let tempertureClass = 'weather-card-temp'
	if (weather.consolidated_weather[0].the_temp <= 5) {
		tempertureClass += '-low'
	} else if (weather.consolidated_weather[0].the_temp > 5 && weather.consolidated_weather[0].the_temp < 30) {
		tempertureClass += '-normal'
	} else tempertureClass += '-high'
	return (
		<div className='weather-card'>
			<h2 className='weather-card-title'>{weather.title}</h2>
			<img
				className='weather-card-current-weather-img'
				src={`https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg`}
				alt='current weather image'
				width='170px'
			/>
			<h2 className='weather-state-name'>
				{weather.consolidated_weather[0].weather_state_name}
			</h2>
			<h3 className={tempertureClass}>
				{weather.consolidated_weather[0].the_temp.toFixed(1)} °C
			</h3>
			<h3 className='weather-card-time'>
				Local time {weather.time.substring(11, 16)}
			</h3>
			<div className='weather-card-times'>
				<h3 className='weather-card-sunrise-sunset'>
					Sunrise {weather.sun_rise.substring(11, 16)}
				</h3>
				<h3 className='weather-card-sunrise-sunset'>
					Sunset {weather.sun_set.substring(11, 16)}
				</h3>
			</div>
		</div>
	);
}

export default CityCard;

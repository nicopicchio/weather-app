import { useState, useEffect } from 'react';
import CityCard from './Components/CityCard/CityCard';
import Form from './Components/Form/Form';

function App() {
	const initialLocation = 'London';
	const [location, setLocation] = useState(initialLocation);
	const [weather, setWeather] = useState();
	console.log('RENDERING WEATHER APP', weather);

	const getLocation = () => {
		fetch(`http://localhost:3001/api/location/search/?query=${location}`)
			.then((res) => res.json())
			.then((jsonResponse) => getWeather(jsonResponse[0].woeid));
	};

	const getWeather = (id) => {
		fetch(`http://localhost:3001/api/location/${id}`)
			.then((res) => res.json())
			.then((jsonResponse) => setWeather(jsonResponse));
	};

	useEffect(() => {
		if (!location) return;
		else getLocation();
	}, [location]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(e.target.city.value);
	};

	return (
		<>
			<div className='header-container'>
				<img src='/logo.png' id='logo' alt='logo' width='120px' />
				<h1>Weather App</h1>
			</div>
			<div className='form-container'>
				<Form handleSubmit={handleSubmit} />
			</div>
			<div className='card-container'>
				<CityCard weather={weather} />
			</div>
		</>
	);
}

export default App;

import { useState, useEffect } from 'react';
import CityCard from './Components/CityCard/CityCard';
import Form from './Components/Form/Form';

const url = process.env.REACT_APP_API_URL

const getLocation = (loc, setWeather) => {
	fetch(`${url}/api/location/search/?query=${loc}`)
		.then((res) => res.json())
		.then((jsonResponse) => getWeather(jsonResponse[0].woeid, setWeather));
};

const getWeather = (id, setWeather) => {
	fetch(`${url}/api/location/${id}`)
		.then((res) => res.json())
		.then((jsonResponse) => setWeather(jsonResponse));
};

function App() {
	const initialLocation = 'London';
	const [location, setLocation] = useState(initialLocation);
	const [weather, setWeather] = useState();

	useEffect(() => {
		if (!location) return;
		getLocation(location, setWeather);
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

import { useState, useEffect } from 'react';
import CityCard from './Components/CityCard/CityCard';

function App() {
	const [location, setLocation] = useState('');
	const [woeID, setWoeID] = useState(0);
	const [weather, setWeather] = useState({});
	console.log('RENDERING WEATHER APP', weather);

	useEffect(() => {
		fetch(`http://localhost:3001/api/location/search/?query=${location}`)
			.then((res) => res.json())
			.then((jsonResponse) => setWoeID(jsonResponse[0].woeid));
	}, [location]);

	useEffect(() => {
		fetch(`http://localhost:3001/api/location/${woeID}`)
			.then((res) => res.json())
			.then((jsonResponse) => setWeather(jsonResponse));
	}, [woeID]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(e.target.city.value);
	};

	return (
		<>
			<div className='header-container'>
				<img src='/logo.png' id='logo' alt='logo' width='120px' />
				<h1>Weather App</h1>
				<form className='location-form' onSubmit={handleSubmit}>
					<label className='input-label'>
						<input
							type='text'
							className='search-input'
							name='city'
							placeholder='Search location...'
							required
						/>
						<input type='submit' className='submit-button' value='Search' />
					</label>
				</form>
				<CityCard weather={weather}/>
			</div>
		</>
	);
}

export default App;

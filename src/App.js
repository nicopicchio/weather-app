import { useState, useEffect } from 'react';
import { logo } from './assets/logo.png';

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
			<div className='container'>
				{/* <img id='logo' alt='logo' src={logo} /> */}
				<h1>Weather App</h1>
				<form className='location-form' onSubmit={handleSubmit}>
					<label className='input-label'>
						Location
						<input type='text' className='search-input' name='city' required />
						<input type='submit' className='submit-button' value='Search' />
					</label>
				</form>
			</div>
		</>
	);
}

export default App;

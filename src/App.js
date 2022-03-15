import { useState, useEffect } from 'react';

function App() {
	const [location, setLocation] = useState('');
	const [woeID, setWoeID] = useState(0);
	console.log('RENDERING WEATHER APP', woeID);

	// new object for json response
	useEffect(() => {
		fetch(`http://localhost:3001/api/location/search/?query=${location}`)
			.then((res) => res.json())
			.then((jsonResponse) => setWoeID(jsonResponse[0].woeid));
	}, [location]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(e.target.city.value);
	};

	return (
		<>
			<div className='container'>
				<h1>Weather App</h1>
				<form className='location-form' onSubmit={handleSubmit}>
					<label className='input-label'>
						Please enter location
						<input type='text' className='search-input' name='city' required />
						<input type='submit' className='submit-button' value='Search' />
					</label>
				</form>
			</div>
		</>
	);
}

export default App;

function Form({ handleSubmit }) {
	return (
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
	);
}

export default Form;

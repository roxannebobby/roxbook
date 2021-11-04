import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('https://randomuser.me/api/?results=5')
			.then((resp) => {
				setUsers(resp.data.results);
			})
			.catch((err) => console.error(err));
	}, []);
	return (
		<div className='App'>
			<h1>RoxBook, like Facebook with less drama!</h1>
		</div>
	);
}

export default App;

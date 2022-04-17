import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Characters from './pages/Characters';
import Navbar from './components/Navbar/Navbar';
import Details from './pages/Details';
import './styles/App.scss';
import Character from './pages/Character';

function App() {
	const [id, setId] = useState();
	const [charId, setCharId] = useState(1011334);

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Routes>
					<Route path='/comics' element={<Comics />} />
				</Routes>
				<Routes>
					<Route path='/characters' element={<Characters />} />
				</Routes>
				<Routes>
					<Route path='/character' element={<Character />} />
				</Routes>
				<Routes>
					<Route
						path='/details'
						element={<Details id={id} charId={charId} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import './styles/global.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/_home/Home';
import Calendar from './pages/_calendar/Calendar';
import Statistics from './pages/_statistics/Statistics';
import Challenges from './pages/_challenges/Challenges';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/calendar' element={<Calendar />} />
				<Route path='/statistics' element={<Statistics />} />
				<Route path='/challenges' element={<Challenges />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

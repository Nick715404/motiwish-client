import React from 'react';
import './styles/global.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/_home/Home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/analytics' element={<Home />} />
				<Route path='/challenge' element={<Home />} />
				<Route path='/chota' element={<Home />} /> */}
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

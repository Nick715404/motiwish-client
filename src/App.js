import './styles/global.scss';
import '@vkontakte/vkui/dist/vkui.css';

import { View, Epic } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

import MyTabbar from './components/_tabbar/Tabbar';

import { useEffect } from 'react';

import Home from './panels/_home/Home';
import Calendar from './panels/_calendar/CalendarPage';
import Statistics from './panels/_statistics/Statistics';
import Challenges from './panels/_challenges/Challenges';

const App = () => {
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('homePanel');

	// useEffect(() => {
	// 	// Очистить весь localStorage
	// 	localStorage.clear();
	// },[]);

	return (
		<Epic
			activeStory={activeView}
			tabbar={<MyTabbar />}>
			<View id={activeView} activePanel={activePanel}>
				<Home nav='homePanel' />
				<Calendar nav='calendarPanel' />
				<Statistics nav='statisticsPanel' />
				<Challenges nav='challengesPanel' />
			</View>
		</Epic>
	);
}

export default App;

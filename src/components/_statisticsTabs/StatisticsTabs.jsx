import './StatisticsTabs.scss'

import { useState, useEffect } from 'react'
import { useTasks } from '../../customHooks/useTasks';

import StatisticWheel from '../_ statisticWheel/StatisticWheel';

export default function StatisticsTabs() {

  const [activeTab, setActiveTab] = useState(1);
  const { doneTasks } = useTasks();
  const [curentTasksLenght, setCurentTasksLenght] = useState(doneTasks.length);

  const dayTasksDefault = 10;
  const weekPercentage = 10 + '%';
  const yaerPercentage = 10 + '%';

  useEffect(() => {
    const storedDoneTasks = localStorage.getItem('doneTasks');
    if (storedDoneTasks) {
      const parsedDoneTasks = JSON.parse(storedDoneTasks);
      setCurentTasksLenght(parsedDoneTasks.length);
    }

    // setTimeout(() => {
    //   // setDoneTasks([]); // Опционально: обновление состояния в приложении
    //   localStorage.removeItem('doneTasks');
    // }, 1000);
  }, []);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='statistics-tabs'>
      <div className='statistics-tabs__btns'>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
          День
        </button>
        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          Неделя
        </button>
        <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
          Месяц
        </button>
      </div>

      <div className='statistics-tabs__content-wrapper'>
        {activeTab === 1 &&
          <div className='statistics-tabs__content'
            id='tab-content-1'>
            <StatisticWheel>
              {curentTasksLenght}/{dayTasksDefault}
            </StatisticWheel>
          </div>}
        {activeTab === 2 &&
          <div className='statistics-tabs__content'
            id='tab-content-2'>
            <StatisticWheel>{weekPercentage}</StatisticWheel>
          </div>}
        {activeTab === 3 &&
          <div className='statistics-tabs__content'
            id='tab-content-3'>
            <StatisticWheel>{yaerPercentage}</StatisticWheel>
          </div>}
      </div>
    </div>
  )
}

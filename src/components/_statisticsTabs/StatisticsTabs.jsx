import './StatisticsTabs.scss'

import { useState } from 'react'

export default function StatisticsTabs() {

  const [activeTab, setActiveTab] = useState(1);

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
        {activeTab === 1 && <p className='statistics-tabs__content' id='tab-content-1'>Content for Tab 1</p>}
        {activeTab === 2 && <p className='statistics-tabs__content' id='tab-content-2'>Content for Tab 2</p>}
        {activeTab === 3 && <p className='statistics-tabs__content' id='tab-content-3'>Content for Tab 3</p>}
      </div>
    </div>
  )
}

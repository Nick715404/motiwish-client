import './MyChallenge.scss';
import { useState } from 'react';

import { CellButton } from '@vkontakte/vkui';
import SpringModalSheet from '../_springSheet/SpringModalSheet';

import { VKBridge } from '@vkontakte/vk-bridge';

export default function MyChallenge() {

  const [challenge, doneChallenge] = useState([]);

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleSelectFriend = async () => {
    try {
      // Используем VK Bridge для вызова окна выбора друга
      const selectedFriendData = await window.VKBridge.send('VKWebAppGetFriends', {});

      // Проверяем, был ли выбран друг
      if (selectedFriendData && selectedFriendData.users && selectedFriendData.users.length > 0) {
        const friend = selectedFriendData.users[0];

        // Сохраняем информацию о выбранном друге
        setSelectedFriend(friend);

        // Можете выполнить дополнительные действия с выбранным другом
        console.log('Выбранный друг:', friend);
      } else {
        console.log('Выбор друга отменен');
      }
    } catch (error) {
      console.error('Ошибка при выборе друга:', error);
    }
  };

  return (
    <CellButton onClick={() => setOpen(true)}>
      <div className="MyChallenge__img-box" />
      <div className="MyChallenge__item-title"> Мои челленджи </div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        <div className="MyChallenge__title" style={{
          fontSize: '18px',
          fontWeight: '400',
          color: '#ED903A',
          textAlign: 'center',
          marginTop: '-12px',
          marginBottom: '20px',
        }}>
          Мои челленджи
        </div>
        <div className='MyChallenge-tabs challenges-tabs'>
          <div className='challenges-tabs__btns'>
            <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
              Полученные
            </button>
            <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
              Отправленные
            </button>
          </div>

          <div className='challenges-tabs__content-wrapper'>
            {activeTab === 1 && <p className='challenges-tabs__content' id='tab-content-1'>Здесь будут отображаться челленджи, которые Вам отправят друзья</p>}
            {activeTab === 2 && <p className='challenges-tabs__content' id='tab-content-2'>В разработке</p>}
          </div>
        </div>
        <div className="MyChallenge-add-friend-btn-box">
          <button className='MyChallenge-add-friend-btn'>
            Пригласить друзей
          </button>
        </div>
      </SpringModalSheet>
    </CellButton>
  )
}

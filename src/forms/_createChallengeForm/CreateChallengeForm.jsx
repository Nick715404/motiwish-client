import './CreateChallengeForm.scss';

import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';

export default function CreateChallengeForm() {

  useEffect(() => {
    const getUserFriends = async () => {
      try {
        const data = bridge.send('VKWebAppGetUserInfo', { user_id: 743784474 });
        if (data.id) {
          // Данные пользователя получены
          console.log(data);
        }
      }
      catch (error) {
        // Ошибка
        console.error(error);
      }

      getUserFriends();
    }
  }, [])

  const [challenge, setChallenge] = useState([]);

  return (
    <>
      <div className="">
        Создать челлендж!
      </div>
      <div>
        {/* {getUserFriends.map((friend) => (
          <div>

          </div>
        ))} */}
      </div>
      <SpringModalSheet></SpringModalSheet>
    </>
  )
}

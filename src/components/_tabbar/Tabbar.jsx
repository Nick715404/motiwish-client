import './Tabbar.scss';

import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { Icon36HomeOutline } from '@vkontakte/icons';
import { Icon36CalendarOutline } from '@vkontakte/icons';

import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
// поменять иконки
export default function MyTabbar() {

  const navigator = useRouteNavigator();

  return (
    <Tabbar>
      <TabbarItem onClick={() => navigator.push('/')} className='disable' text='Домой'>
        <Icon36HomeOutline  />
      </TabbarItem>
      <TabbarItem onClick={() => navigator.push('/calendar')} className='disable' text='Календарь'>
        <Icon36CalendarOutline />
      </TabbarItem>
      <TabbarItem onClick={() => navigator.push('/statistics')} className='disable' text='Статистика'>
        <div className="statisctic-icon"></div>
      </TabbarItem>
      <TabbarItem onClick={() => navigator.push('/challenges')} className='disable' text='Челленджи'>
        <div className="challenges-icon"></div>
      </TabbarItem>
    </Tabbar>
  )
}

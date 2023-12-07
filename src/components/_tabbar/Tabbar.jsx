import React, { useState } from 'react';
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { Icon36HomeOutline, Icon36CalendarOutline, Icon36LiveOutline, Icon28StatisticCircleFillBlue } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Icon28StatisticsOutline } from '@vkontakte/icons';

import './Tabbar.scss';

export default function MyTabbar() {
  const navigator = useRouteNavigator();
  const { panel: activePanel } = useActiveVkuiLocation();

  const [activeTab, setActiveTab] = useState(null);

  const handleItemClick = (itemName) => {
    navigator.push(`/${itemName}`);
    setActiveTab(itemName);
  };

  const getTabClass = (tabName) => {
    return activePanel === `${tabName}Panel` ? 'clicked-item' : '';
  };

  return (
    <Tabbar>
      <TabbarItem
        selected={activePanel === 'homePanel'}
        onClick={() => handleItemClick('')}
        text='Домой'>
        <Icon36HomeOutline />
      </TabbarItem>
      <TabbarItem
        selected={activePanel === 'calendarPanel'}
        onClick={() => handleItemClick('calendar')}
        text='Календарь'>
        <Icon36CalendarOutline />
      </TabbarItem>
      <TabbarItem
        selected={activePanel === 'statisticsPanel'}
        onClick={() => handleItemClick('statistics')}
        text='Статистика'>
        <Icon28StatisticsOutline />
      </TabbarItem>
      <TabbarItem
        selected={activePanel === 'challengesPanel'}
        onClick={() => handleItemClick('challenges')}
        text='Челленджи'>
         <Icon36LiveOutline />
      </TabbarItem>
    </Tabbar>
  );
}

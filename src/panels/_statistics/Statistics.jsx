import './Statistics.scss';

import { View, Panel } from '@vkontakte/vkui';

import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';
import Header from './../../components/_header/Header';
import DatePagination from '../../components/_datePagination/DatePagination';
import StatisticsTabs from '../../components/_statisticsTabs/StatisticsTabs';

export default function Statistics() {
  return (
    <View activePanel="statisticsPanel">
      <Panel id="statisticsPanel">
        <div className="">
          <Header />
          <div className="container">
            <StatisticsTabs />
            <DatePagination />
          </div>
        </div>
        <SpringModalSheet />
      </Panel>
    </View>
  )
}


import { View, Panel } from '@vkontakte/vkui';

import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';

export default function Statistics() {
  return (
    <View activePanel="statisticsPanel">
      <Panel id="statisticsPanel">
        <div className="">
          Statisctics
        </div>
        <SpringModalSheet />
      </Panel>
    </View>
  )
}

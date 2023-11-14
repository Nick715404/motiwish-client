import { View, Panel } from '@vkontakte/vkui';

export default function Statistics() {
  return (
    <View activePanel="statisticsPanel">
      <Panel id="statisticsPanel">
        <div className="">
          Statisctics
        </div>
      </Panel>
    </View>
  )
}

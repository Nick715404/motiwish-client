import { Panel, View } from '@vkontakte/vkui';

export default function Challenges() {
  return (
    <View activePanel="challengesPanel">
      <Panel id='challengesPanel'>
        <div className="">
          Challenges
        </div>
      </Panel>
    </View>
  )
}

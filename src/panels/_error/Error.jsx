import { View, Panel } from "@vkontakte/vkui";

export default function Error() {
  return (
    <View activePanel="errorPanel">
      <Panel id="errorPanel">
        <Header />
        <h1>Упс, кажется что то пошло не так :(</h1>
      </Panel>
    </View>
  )
}

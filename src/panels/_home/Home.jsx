import './Home.scss';

import { View, Panel } from "@vkontakte/vkui";

import Header from "./../../components/_header/Header";
import TaskModal from "../../components/_taskModal/TaskModal";
import Mars from "../../components/_mars/Mars";

export default function Home() {
  return (
    <View activePanel="homePanel">
      <Panel id="homePanel">
        <Header />
        <Mars />
        <TaskModal />
      </Panel>
    </View>
  )
}

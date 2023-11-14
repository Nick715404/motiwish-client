import Header from "./../../components/_header/Header";
import Footer from './../../components/_footer/Footer';
import TaskModal from "../../components/_taskModal/TaskModal";
import Mars from "../../components/_mars/Mars";

import { View, Panel } from "@vkontakte/vkui";

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

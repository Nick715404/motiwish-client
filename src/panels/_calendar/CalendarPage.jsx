import './CalendarPage.scss';

import { View, Panel } from "@vkontakte/vkui";

import VKCalendar from "../../components/_calendarVk/VKCalendar";
import Header from "./../../components/_header/Header";
import TaskModal from './../../components/_taskModal/TaskModal';

export default function CalendarPage() {

  return (
    <View activePanel="calendarPanel">
      <Panel id="calendarPanel">
        <Header />
        <div className="container">
          <VKCalendar />
          <TaskModal />
        </div>
      </Panel>
    </View>
  )
}
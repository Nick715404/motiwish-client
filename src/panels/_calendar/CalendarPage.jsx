import CalendarMain from "../../components/_calendar/CalendarMain";
import { View, Panel } from "@vkontakte/vkui";

export default function CalendarPage() {
  return (
    <View activePanel="calendarPanel">
      <Panel id="calendarPanel">
        <div className="">
          Calendar
        </div>
      </Panel>
    </View>
  )
}

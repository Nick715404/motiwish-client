import './Home.scss';

import { View, Panel } from "@vkontakte/vkui";
import { useState } from 'react';

import Header from "./../../components/_header/Header";
import TaskModal from "../../components/_taskModal/TaskModal";
import Mars from "../../components/_mars/Mars";
import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';

import CreateTaskForm from '../../forms/_createTaskForm/CreateTaskForm';

export default function Home() {

  const [open, setOpen] = useState(false);

  const openAddTaskModal = () => setOpen(true);
  const closeAddTaskModal = () => setOpen(false);

  const modalChildren = () => {
    return (
      <CreateTaskForm />
    )
  }

  return (
    <View activePanel="homePanel">
      <Panel id="homePanel">
        <Header />
        <Mars />
        <TaskModal handleClick={openAddTaskModal} />
        <SpringModalSheet closedState={closeAddTaskModal} openState={open}>
          {modalChildren()}
        </SpringModalSheet>
      </Panel>
    </View>
  )
}

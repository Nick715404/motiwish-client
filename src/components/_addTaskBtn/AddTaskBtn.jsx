import './AddTaskBtn.scss';

import { useState } from 'react';

import SpringModalSheet from '../_springSheet/SpringModalSheet';
import CreateTaskForm from '../../forms/_createTaskForm/CreateTaskForm';

export default function AddTaskBtn({ text, addTask, tasks, deleteTask }) {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} className='addTaskBtn'>{text}</button>
      <SpringModalSheet children={(<CreateTaskForm addTask={addTask} deleteTask={deleteTask} tasks={tasks} />)} openState={open} closedState={() => setOpen(false)} />
    </div>
  )
}

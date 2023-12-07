import './AddTaskBtn.scss';

import { useState } from 'react';

import SpringModalSheet from '../_springSheet/SpringModalSheet';
import CreateTaskForm from '../../forms/_createTaskForm/CreateTaskForm';

export default function AddTaskBtn({ text }) {

  const [open, setOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setOpen(true)} className='addTaskBtn'>{text}</button>
      <SpringModalSheet children={( <CreateTaskForm /> )} openState={open} closedState={() => setOpen(false)} />
    </div>
  )
}

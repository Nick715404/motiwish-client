import './TaskModal.scss';

import { useState } from 'react';

import AddTaskBtn from '../_addTaskBtn/AddTaskBtn';
import NotDoneImg from './../../assets/svg/check-icon-normal.svg'
import SpringModalSheet from '../_springSheet/SpringModalSheet';
import EditTask from '../../forms/_editTask/EditTask';
import Task from '../_task/Task';

import data from './../../data.json';

export default function TaskModal() {

  const [open, setOpen] = useState(false);

  return (
    <div className='home-task home-task__modal'>
      <div className="home-task__btn-box">
        <AddTaskBtn text={'Добавить задачу'} />
      </div>
      <div className="home-task__tasks">
        {data.map((task) => (
          <Task key={task.id} task={task}>
            <img src={NotDoneImg} alt="" />
            <div className="task__title">{task.title}</div>
          </Task>
        ))}
      </div>
    </div>
  )
}

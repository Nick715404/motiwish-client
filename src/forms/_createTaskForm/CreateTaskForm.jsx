// import { useForm } from 'react-hook-form';
// import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';
// import VKCalendar from '../../components/_calendarVk/VKCalendar';

import './CreateTaskForm.scss';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateTaskForm({ addTask, deleteTask, tasks }) {

  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescr, setTaskDescr] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: taskDescr,
    };

    addTask(newTask);

    // Очистка полей после добавления задачи
    setTaskTitle('');
    setTaskDescr('');
  };

  return (
    <form className='create-task__form' onSubmit={handleSubmit}>
      <label>
        <input
          className='create-task__input'
          type="text"
          name='taskTitle'
          id='taskTitle'
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder='Пример: Сделать крутое приложение' />
      </label>
      <label>
        <input className='create-task__input'
          type="text"
          name="taskDescr"
          id='taskDescr'
          value={taskDescr}
          onChange={(e) => setTaskDescr(e.target.value)}
          placeholder='Описание' />
      </label>
      <label>
        <button className='create-task__calendar-btn'>Сегодня</button>
      </label>
      <input
        className='submit-task-btn create-task__submit'
        type="submit"
        value='Создать задачу' />
      <input
        className='delete-task-btn create-task__delete'
        type="reset"
        onClick={() => setOpen(false)}
        value='Отменить' />
    </form>
  );
}

import './CreateTaskForm.scss';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import SpringModalSheet from '../../components/_springSheet/SpringModalSheet';
import VKCalendar from '../../components/_calendarVk/VKCalendar';

export default function CreateTaskForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      description: '',
    }
  });

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <form className='create-task__form'
      onSubmit={handleSubmit((data) => {
        setCount(count + 1);
        console.log(data);
      })} >
      <label>
        <input
          className='create-task__input'
          type="text"
          name='taskTitle'
          id='taskTitle'
          placeholder='Пример: Сделать крутое приложение' {...register('taskTitle', {
            required: 'Это поле обязательно для заполнения'
          })} />
        <p>{errors.name?.message}</p>
      </label>
      <label>
        <input className='create-task__input'
          type="text"
          name="taskDescr"
          id='taskDescr'
          placeholder='Описание' />
      </label>
      <label>
        <button
          onClick={handleClick}
          className='create-task__calendar-btn'>Сегодня</button>
      </label>
      <input
        onClick={handleClick}
        className='submit-task-btn create-task__submit'
        type="submit"
        value='Создать задачу' />
      <input
        onClick={handleClick}
        className='delete-task-btn create-task__delete'
        type="reset"
        value='Удалить' />

      <SpringModalSheet children={( <VKCalendar /> )} openState={open} closedState={() => setOpen(false)} />
    </form>
  )
}
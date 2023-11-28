import './CreateTaskForm.scss';

import { useForm } from 'react-hook-form';

export default function CreateTaskForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      description: '',
    }
  });

  const handleClick = (event) => {
    event.preventDefault();
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
        value='Создать карточку' />
      <input
        onClick={handleClick}
        className='delete-task-btn create-task__delete'
        type="reset"
        value='Удалить' />
    </form>
  )
}
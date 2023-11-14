import './TaskModal.scss';

import AddTaskBtn from '../_addTaskBtn/AddTaskBtn';

export default function TaskModal() {
  return (
    <div className='home-task home-task__modal'>
      <div className="home-task__btn-box">
        <AddTaskBtn text={'Добавить задачу'} />
      </div>
      <div className="home-task__tasks">
        тут задачи из сервера
      </div>
    </div>
  )
}

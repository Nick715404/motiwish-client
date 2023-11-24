import './TaskModal.scss';

import AddTaskBtn from '../_addTaskBtn/AddTaskBtn';

export default function TaskModal({ handleClick }) {
  return (
    <div className='home-task home-task__modal'>
      <div className="home-task__btn-box">
        <AddTaskBtn handleClick={handleClick}
          text={'Добавить задачу'} />
      </div>
      <div className="home-task__tasks">
        Купить курицу!
      </div>
    </div>
  )
}

import './TaskModal.scss';

import { useState, useEffect } from 'react';
import { useTasks } from '../../customHooks/useTasks';
import { useCoins } from './../../customHooks/useCoins';

import AddTaskBtn from '../_addTaskBtn/AddTaskBtn';
import Task from '../_task/Task';
import SpringModalSheet from '../_springSheet/SpringModalSheet';

import NotDoneImg from './../../assets/svg/check-icon-normal.svg';
import DoneImg from './../../assets/svg/DoneImg.svg';


export default function TaskModal() {

  const [open, setOpen] = useState(false);
  const { tasks, setTasks, doneTasks, setDoneTasks } = useTasks();
  const { setCoin, coin } = useCoins();

  // Удаление лок стора
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    const storedDoneTasks = localStorage.getItem('doneTasks');
    const storedCoins = localStorage.getItem('coin');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    if (storedDoneTasks) {
      setDoneTasks(JSON.parse(storedDoneTasks));
    }
    if (storedCoins) {
      setCoin(JSON.parse(storedCoins));
    }
  }, []);

  // Сохранение данных в локальное хранилище при изменении задач
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('coin', JSON.stringify(coin));

    //  setTimeout(() => {
    //     // setDoneTasks([]); // Опционально: обновление состояния в приложении
    //     localStorage.removeItem('coin');
    //   }, 100);
  }, [coin]);

  useEffect(() => {
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));

    const twentyFourHours = 24 * 60 * 60 * 1000;
    // setTimeout(() => {
    //   localStorage.removeItem('doneTasks');
    // }, 100);

  }, [doneTasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // сохранение в массив doneTask
  const toggleDone = (taskId) => {
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, taskId]);
    setCoin((prevCoin) => prevCoin + 2000);

    // удаление задачи
    // setTimeout(() => {
    //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    // }, 1000)
  };

  return (
    <>
      <div className='home-task home-task__modal' onClick={() => setOpen(true)}>
        <div className="home-task__btn-box">
          <button className='addTaskBtn'>Добавить задачу</button>
        </div>
        {tasks.length === 0 && (
          <div className="home-task__text">
            <span style={{
              display: 'block',
              margin: '0 auto',
              color: '#ED903A',
              fontSize: '14px',
              textAlign: 'center',
              marginTop: '35px',
              maxWidth: '180px'
            }}>Тут будут отображаться все ваши задачи!</span>
          </div>
        )}
        <div className="home-task__tasks">
          {tasks.map((task) => (
            <Task key={task.id} task={task}>
              <img src={doneTasks.includes(task.id) ? DoneImg : NotDoneImg} alt="" />
              <div className="task__title">{task.title}</div>
            </Task>
          ))}
        </div>
      </div>

      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        <div className='home-task-modal'>
          <div className="home-task__btn-box">
            <AddTaskBtn addTask={addTask} tasks={tasks} text={'Добавить задачу'} />
          </div>
          {tasks.length === 0 && (
            <div className="home-task-modal__text">
              <span style={{
                display: 'block',
                color: '#ED903A',
                fontSize: '16px',
                paddingTop: '40px',
                maxWidth: '200px'
              }}>Добавьте задачу и она появится ниже!</span>
            </div>
          )}
          <div className="home-task__tasks">
            {tasks.map((task) => (
              <Task key={task.id} task={task}>
                <img src={doneTasks.includes(task.id) ? DoneImg : NotDoneImg} alt="" onClick={() => toggleDone(task.id)} />
                <div className="task__title">{task.title}</div>
              </Task>
            ))}
          </div>
        </div>
      </SpringModalSheet>
    </>
  )
}

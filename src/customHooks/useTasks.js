import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, doneTasks, setDoneTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};
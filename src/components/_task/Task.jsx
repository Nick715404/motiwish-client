import './Task.scss';

import { useState } from 'react';

import SpringModalSheet from '../_springSheet/SpringModalSheet';

export default function Task({ task, children }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div key={task.id} className="task" onClick={() => { setOpen(true) }} >
        {children}
      </div>
      <SpringModalSheet openState={open} closedState={() => { setOpen(false) }}>
        Изменить задачу
      </SpringModalSheet>
    </>
  )
}

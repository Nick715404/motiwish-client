import './MyChallenge.scss';
import { useState } from 'react';

import { CellButton } from '@vkontakte/vkui';
import SpringModalSheet from '../_springSheet/SpringModalSheet';

export default function MyChallenge() {

  const [open, setOpen] = useState(false);

  return (
    <CellButton onClick={() => setOpen(true)}>
      <div className="MyChallenge__img-box" />
      <div className="MyChallenge__item-title"> Мои челленджи </div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        Мои челленджи
      </SpringModalSheet>
    </CellButton>
  )
}

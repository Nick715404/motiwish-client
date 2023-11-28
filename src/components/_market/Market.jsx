import './Market.scss';

import { useState } from 'react';
import { CellButton } from '@vkontakte/vkui';
import SpringModalSheet from '../_springSheet/SpringModalSheet';

export default function Market() {

  const [open, setOpen] = useState(false);

  return (
    <CellButton onClick={() => setOpen(true)}>
      <div className="MyChallenge__img-box" />
      <div className="MyChallenge__item-title">Магазин</div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        Магазин
      </SpringModalSheet>
    </CellButton>
  )
}

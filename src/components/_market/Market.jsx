import './Market.scss';

import { CellButton } from '@vkontakte/vkui';
import { useState } from 'react';

import SpringModalSheet from '../_springSheet/SpringModalSheet';
import ChallengesStore from '../_challengesStore/ChallengesStore';

export default function Market() {

  const [open, setOpen] = useState(false);

  return (
    <CellButton onClick={() => setOpen(true)}>
      <div className="market__img-box" />
      <div className="MyChallenge__item-title">Магазин</div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        <ChallengesStore />
      </SpringModalSheet>
    </CellButton>
  )
}
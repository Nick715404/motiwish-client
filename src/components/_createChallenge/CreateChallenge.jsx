import './CreateChallenge.scss';

import { CellButton } from '@vkontakte/vkui';
import { useState } from 'react';

import SpringModalSheet from '../_springSheet/SpringModalSheet';
import CreateChallengeForm from '../../forms/_createChallengeForm/CreateChallengeForm';

export default function CreateChallenge() {

  const [open, setOpen] = useState(false);

  return (
    <CellButton onClick={() => setOpen(true)}>
      <div className="MyChallenge__img-box" />
      <div className="MyChallenge__item-title">Создать челлендж</div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        <CreateChallengeForm>
          
        </CreateChallengeForm>
      </SpringModalSheet>
    </CellButton>
  )
}
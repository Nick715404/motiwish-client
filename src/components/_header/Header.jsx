import './Header.scss';

import { PanelHeader } from '@vkontakte/vkui';

import BurgerMenu from '../_burgerMenu/BurgerMenu';
import Coins from './../_coins/Coins';

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <PanelHeader className='header-panel'>
          <div className='burger-box'>
            <BurgerMenu />
          </div>
          <div className='coins-box'>
            <Coins count={15} />
          </div>
        </PanelHeader>
      </div>
    </header>
  )
}

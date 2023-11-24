import './BurgerMenu.scss';

import { useState } from 'react';

export default function BurgerMenu() {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className='menu'>
      <div
        className='menu__burger_box'
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <div className='menu__burger_icon'></div>
      </div>
      <div className={activeMenu ? 'menu__wrapper burger-active' : 'menu__wrapper'}>
        <div className='close_btn' onClick={() => setActiveMenu(false)}></div>
        <div className='menu__title'>
          <span className='menu__span'>Moti</span>
          <span className='menu__span'>Wish</span>
        </div>
        <ul className='menu__list'>
          <li>
            <a href="">Оставить отзыв</a>
          </li>
          <li>
            <a href="">О приложении</a>
          </li>
          <li>
            <a href="">Магазин</a>
          </li>
          <li>
            <a href="">Галерея персонажей</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
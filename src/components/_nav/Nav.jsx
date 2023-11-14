import './Nav.scss';
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
    <nav className='nav'>
      <ul className='nav__list list'>
        <li className='list__item'>
          <div className="list__icon list__icon--home"></div>
          <span className='list__title'>Главная</span>
          <NavLink className={({ isActive }) => {
            return ('list__link' + (isActive ? ' active' : ' normal'))
          }} to={'/'}></NavLink>
        </li>
        <li className='list__item'>
          <div className="list__icon list__icon--calendar"></div>
          <span className='list__title'>Календарь</span>
          <NavLink className={({ isActive }) => {
            return ('list__link' + (isActive ? ' active' : ' normal'))
          }} to={'/calendar'}></NavLink>
        </li>
        <li className='list__item'>
          <div className="list__icon list__icon--statistics"></div>
          <span className='list__title'>Статистика</span>
          <NavLink className={({ isActive }) => {
            return ('list__link' + (isActive ? ' active' : ' normal'))
          }} to={'/statistic'}></NavLink>
        </li>
        <li className='list__item'>
          <div className="list__icon list__icon--challenges"></div>
          <span className='list__title'>Челленджи</span>
          <NavLink className={({ isActive }) => {
            return ('list__link' + (isActive ? ' active' : ' normal'))
          }} to={'/challenges'}></NavLink>
        </li>
      </ul>
    </nav>
  )
}

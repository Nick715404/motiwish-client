
import styles from './Header.module.scss';

import BurgerMenu from '../_burgerMenu/BurgerMenu';
import Coins from './../_coins/Coins';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__app_content}>
            <div className="">
              <BurgerMenu />
            </div>
            <div className="">
              <Coins count={15} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

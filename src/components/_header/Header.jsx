
import styles from './Header.module.scss';

import BurgerMenu from '../_burgerMenu/BurgerMenu';

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
              coins
            </div>
          </div>
          <div className={styles.header__vk_content}>
            <div className="">
              menu
            </div>
            <div className="">
              cross
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

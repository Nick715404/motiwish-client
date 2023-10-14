import styles from './Footer.module.scss';
import Nav from '../_nav/Nav';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__nav_box}>
        <Nav />
      </div>
    </footer>
  )
}

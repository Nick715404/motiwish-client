import styles from './Coins.module.scss';

export default function Coins({ count }) {
  return (
    <div className={styles.coin}>
      <div className={styles.coin__icon_box}>
        <div className={styles.coin__icon}></div>
      </div>
      <div className={styles.coin__value_box}>
        <div className={styles.coin__value}>{count}</div>
      </div>
    </div>
  )
}

import styles from './Coins.module.scss';

import { useCoins } from '../../customHooks/useCoins';

export default function Coins() {

  const {coin, setCoin} = useCoins();

  return (
    <div className={styles.coin}>
      <div className={styles.coin__icon_box}>
        <div className={styles.coin__icon}></div>
      </div>
      <div className={styles.coin__value_box}>
        <div className={styles.coin__value}>{coin}</div>
      </div>
    </div>
  )
}

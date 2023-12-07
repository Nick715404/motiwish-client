import styles from './ChallengesStore.scss';

import store from './../../store.json';

export default function ChallengesStore() {
  return (
    <div className='store'>
      <div className="container">
        <div className="store__wrapper">
          <div className="store__title">
            Магазин
          </div>
          <div className="store__content">
            {store.map(item => (
              <div key={item.id} className='store__item store-item'>
                <img className='store-item__img' src={item.img} alt="" />
                <span className='store-item__title'>
                  {item.name}
                </span>
                <span className='store-item__price'>
                  {item.price}
                </span>
                <span className='store-item__coins'>
                  {item.coins}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

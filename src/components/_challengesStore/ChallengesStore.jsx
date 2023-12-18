import styles from './ChallengesStore.scss';
import store from './../../store.json';
import { useCoins } from '../../customHooks/useCoins';
import { useEffect } from 'react';

export default function ChallengesStore() {
  const { galleryItem, setGalleryItem, coin, setCoin } = useCoins();

  useEffect(() => {
    const storedGallery = localStorage.getItem('galleryItem');
    if (storedGallery) {
      setGalleryItem(JSON.parse(storedGallery));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('galleryItem', JSON.stringify(galleryItem));
  }, [galleryItem]);

  const addToGallery = (item, itemCoin) => {
    setGalleryItem((prevItem) => {
      const newItem = [...prevItem, item];
      localStorage.setItem('galleryItem', JSON.stringify(newItem));
      return newItem;
    });

    setCoin((prevCoin) => {
      const newCoin = prevCoin - itemCoin;
      localStorage.setItem('coin', newCoin);
      return newCoin;
    });
  };

  return (
    <div className='store'>
      <div className="">
        <div className="store__wrapper">
          <div className="store__title">
            Магазин
          </div>
          <div className="store__content">
            {store.map((item) => (
              <div key={item.id} className='store__item store-item' onClick={() => { addToGallery(item, item.coins); }}>
                <div className="store-item__img" style={{ backgroundImage: `url(${item.img})` }}></div>
                <span className='store-item__title'>
                  {item.name}
                </span>
                <span className='store-item__price'>
                  {item.price}
                </span>
                <span className='store-item__coins'>
                  {item.coins} монет
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

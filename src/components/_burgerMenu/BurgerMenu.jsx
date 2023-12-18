import './BurgerMenu.scss';
import { useState, useEffect } from 'react';
import { useCoins } from '../../customHooks/useCoins';
import SpringModalSheet from '../_springSheet/SpringModalSheet';

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const { galleryItem, setGalleryItem } = useCoins();

  useEffect(() => {
    const storedGallery = localStorage.getItem('galleryItem');
    if (storedGallery) {
      setGalleryItem(JSON.parse(storedGallery));
    }
  }, []);

  const getGalleryItemCount = (itemId) => {
    return galleryItem.reduce((count, item) => (item.id === itemId ? count + 1 : count), 0);
  };

  const gallery = () => {
    return (
      <div className='store'>
        {galleryItem.map((item) => (
          <div key={item.id} className='store__item store-item'>
            <div className="store-item__img" style={{ backgroundImage: `url(${item.img})` }}></div>
            <span className='store-item__title'>
              {item.name} <span style={{ fontSize: '15px' }}>х{getGalleryItemCount(item.id)}</span>
            </span>
          </div>
        ))}
        {galleryItem.length === 0 && (
          <span style={{
            display: 'block',
            margin: '0 auto',
            color: '#ED903A',
            fontSize: '18px',
            textAlign: 'center',
            marginTop: '5%',
            maxWidth: '230px'
          }}>Тут будут храниться ваши персонажи из галлереи!</span>
        )}
      </div>
    );
  };

  return (
    <>
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
            <li onClick={() => setOpen(true)}>
              Галерея персонажей
            </li>
          </ul>
        </div>
      </div>
      <SpringModalSheet openState={open} closedState={() => setOpen(false)}>
        {gallery()}
      </SpringModalSheet>
    </>
  );
}

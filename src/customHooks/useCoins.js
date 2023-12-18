import { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coin, setCoin] = useState(0);
  const [galleryItem, setGalleryItem ] = useState([]);

  return (
    <CoinContext.Provider value={{ coin, setCoin, galleryItem, setGalleryItem }}>
      {children}
    </CoinContext.Provider>
  );
};

export const useCoins = () => {
  return useContext(CoinContext);
};
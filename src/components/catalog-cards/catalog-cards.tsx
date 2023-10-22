"use client";
import React, { FC, ReactNode, useState, useCallback, useContext } from 'react';
import styles from './catalog-cards.module.css';

interface ICatalogCardsProps {
  children: ReactNode;
  initialType: string;
}

const CatalogCardsContext = React.createContext(false);

const CatalogCards: FC<ICatalogCardsProps> = ({children, initialType}) => {
  const [activeCard, setActiveCard] = useState(initialType);

  const switchCard = useCallback((type) => {
    setActiveCard((activeCard) => activeCard === type ? undefined : type);
  }, []);

  return (
    <CatalogCardsContext.Provider value={{activeCard, switchCard}}>
      {children}
    </CatalogCardsContext.Provider>
  );
};

CatalogCards.Card = function Card ({children, type}) {
  const {activeCard, switchCard} = useContext(CatalogCardsContext);
  return (
    <div 
      className={`${styles['card']} ${activeCard === type && styles['card-shadow']}`}
      onClick={() => switchCard(type)}
    >
      {children}
    </div>
  );
};

CatalogCards.Tooltip = function Tooltip ({children, type}) {
  const {activeCard} = useContext(CatalogCardsContext);
  return (
    <>
      {activeCard === type && <div>{children}</div>}
    </>
  );
};

CatalogCards.Discription = function Discription ({children, type}) {
  const {activeCard, switchCard} = useContext(CatalogCardsContext);
  return (
    <>
      {activeCard === type && <div>{children}</div>}
    </>
  );
};

export default CatalogCards;
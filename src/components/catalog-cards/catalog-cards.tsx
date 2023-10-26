"use client";
import React, { FC, ReactNode, useState, useCallback, useContext, ComponentType } from 'react';
import styles from './catalog-cards.module.css';

interface ICardProps {
  children: ReactNode;
  type: string | undefined;
}

interface ICardsContext {
  activeCard: string | undefined;
  switchCard: (type: string | undefined) => void;
}

const CatalogCardsContext = React.createContext<ICardsContext>({
  activeCard: undefined, switchCard: (type: string | undefined) => {}
});

const Card: FC<ICardProps> = ({children, type}) => {
  const {activeCard, switchCard} = useContext(CatalogCardsContext);
  return (
    <button 
      className={`${styles['card']} ${activeCard === type && styles['card-shadow']}`}
      onClick={() => switchCard(type)}
    >
      {children}
    </button>
  );
};

interface ITooltipProps {
  children: ReactNode;
  type: string | undefined;
}


const Tooltip: FC<ITooltipProps> = ({children, type}) => {
  const {activeCard} = useContext(CatalogCardsContext);
  return (
    <>
      {activeCard === type && <div>{children}</div>}
    </>
  );
};


interface IDiscriptionProps {
  children: ReactNode;
  type: string | undefined;
}


const Discription: FC<IDiscriptionProps> = ({children, type}) => {
  const {activeCard, switchCard} = useContext(CatalogCardsContext);
  return (
    <>
      {activeCard === type && <div>{children}</div>}
    </>
  );
};

interface ICatalogCardsProps {
  children: ReactNode;
  initialType: string | undefined;
}

interface ICatalogCards {
  Card: FC<ICardProps>;
  Tooltip: FC<ITooltipProps>;
  Discription: FC<IDiscriptionProps>;
}

const CatalogCards: FC<ICatalogCardsProps> & ICatalogCards = ({children, initialType}) => {

  const [activeCard, setActiveCard] = useState(initialType);

  const switchCard = useCallback((type: string | undefined) => {
   // setActiveCard((activeCard: string | undefined) => activeCard === type ? undefined : type);
    setActiveCard((activeCard: string | undefined) => activeCard === type ? undefined : type);
  }, []);

  return (
    <CatalogCardsContext.Provider value={{activeCard, switchCard}}>
      {children}
    </CatalogCardsContext.Provider>
  );
};

CatalogCards.Card = Card;
CatalogCards.Tooltip = Tooltip;
CatalogCards.Discription = Discription;

export default CatalogCards;

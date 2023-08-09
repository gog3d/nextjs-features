import { FC, ReactNode, useState, useCallback } from 'react';

import { useRouter } from 'next/router';

import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import BurgerMenuIcon from '@/components/icons/burger-menu-icon';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';

import BurgerMenu from '@/components/burger-menu/burger-menu';
import ModalMobile from '@/components/modal/modal-mobile';

interface IHeaderCatalogItemMobileProps {
  title: string | undefined;
}


const HeaderCatalogItemMobile: FC<IHeaderCatalogItemMobileProps> = ({title}) => {
  const { back } = useRouter();
  const [modalOn, setModalOn] = useState(false)

  const burgerMenuClick = () => {
    setModalOn(true);
  };
  const onClose = () => {
    setModalOn(false);
  };

  return (
    <HeaderWrapperMobile>
      <button onClick={()=> back()}>
        <BackLinkMobileIcon />
      </button>
      <p>{title}</p>
      <button onClick={burgerMenuClick}>
        <BurgerMenuIcon />
      </button>
      <ModalMobile modalOn={modalOn} modalClick={onClose}>
        <BurgerMenu onClose={onClose} />
      </ModalMobile>
    </HeaderWrapperMobile>
  );
};

export default HeaderCatalogItemMobile;
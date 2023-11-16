import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TCupTypes, TContactsTypes } from '@/types/data-types';

import CupsTypesPageMobile from '@/components/screens/cups-types-page-mobile';

interface ICupsTypesProps {
  cups: Array<TCupTypes> | null;
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}


const CupsTypes: FC<ICupsTypesProps> = ({ cups, catalog, contacts }) => {
  const router = useRouter();
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
   
  useEffect(()=>{
    isDesctop ? router.push('/catalog') : ''
  }, [isDesctop]);

  return (
    <CupsTypesPageMobile cups={cups}/>
  )
};

export default CupsTypes;

import {readFile} from 'fs/promises';
import path from 'path';

interface Props {
  cups: Array<TCupTypes> | null;
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
};


interface Errors {
  redirect: {
    destination: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props>  = async () => {

  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;
  const contacts: TContactsTypes = jsonData.contacts;
  const cups_items: TCatalogItemsTypes | undefined = jsonData.catalog.find(item => item.type === 'cups');
  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;
//  return { props: { cups } };
  return { props: { cups, catalog, contacts } };
};

import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import LidsPageMobile from "@/components/screens/lids-page-mobile";

interface ILidsProps {
  catalog: Array<TCatalogItemsTypes>;
}

const Lids: FC <ILidsProps> = ({ catalog }) => {
  const router = useRouter();
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
   
  useEffect(()=>{
    isDesctop ? router.push('/catalog') : ''
  }, [isDesctop]);
  
    return <LidsPageMobile catalog={catalog}/>;
}

export default Lids;


import {readFile} from 'fs/promises';
import path from 'path';

interface Props {
  catalog: Array<TCatalogItemsTypes>;
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
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog.items;

  return { props: { catalog } };
};

import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import MayonnaiseSaucePageMobile from "@/components/screens/mayonnaise-sauce-page-mobile";

interface IMayonnaiseSauceProps {
  catalog: Array<TCatalogItemsTypes>;
}

const MayonnaiseSauce: FC <IMayonnaiseSauceProps> = ({ catalog }) => {
  const router = useRouter();
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
   
  useEffect(()=>{
    isDesctop ? router.push('/catalog') : ''
  }, [isDesctop]);
  
    return <MayonnaiseSaucePageMobile catalog={catalog}/>;
}

export default MayonnaiseSauce;


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
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;

  return { props: { catalog } };
};

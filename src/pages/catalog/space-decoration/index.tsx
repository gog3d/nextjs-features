import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import SpaceDecorationPageMobile from "@/components/screens/space-decoration-page-mobile";

interface ISpaceDecorationProps {
  catalog: Array<TCatalogItemsTypes>;
}

const SpaceDecoration: FC <ISpaceDecorationProps> = ({ catalog }) => {
  const router = useRouter();
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
   
  useEffect(()=>{
    isDesctop ? router.push('/catalog') : ''
  }, [isDesctop]);
  
    return <SpaceDecorationPageMobile catalog={catalog}/>;
}

export default SpaceDecoration;


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

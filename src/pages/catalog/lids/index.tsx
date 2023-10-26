import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import LidsPageMobile from "@/components/screens/lids-page-mobile";

interface ILidsProps {
  catalog: Array<TCatalogItemsTypes>;
}

const Lids: FC <ILidsProps> = ({ catalog }) => {
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
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;

  return { props: { catalog } };
};

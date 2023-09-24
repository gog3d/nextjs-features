import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import HomePageMobile from "@/components/screens/home-page-mobile";

interface IHomeProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const Home: FC <IHomeProps> = ({ catalog, contacts }) => {
  return <HomePageMobile catalog={catalog} contacts={contacts} />;
}
export default Home;

import {readFile} from 'fs/promises';
import path from 'path';

interface Props {
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
  return { props: { catalog, contacts } };
};

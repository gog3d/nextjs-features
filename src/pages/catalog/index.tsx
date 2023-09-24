import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import CatalogPageMobile from "@/components/screens/catalog-page-mobile";

interface ICatalogProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}


const  Catalog: FC <ICatalogProps> = ({ catalog, contacts }) => {
    return <CatalogPageMobile catalog={catalog} contacts={contacts} />;
}

export default Catalog;

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


//export const getStaticProps: GetServerSideProps<{cups  = async ({params}) => {
export const getServerSideProps: GetServerSideProps<Props>  = async () => {

  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;
  const contacts: TContactsTypes = jsonData.contacts;
//  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;
  return { props: { catalog, contacts } };
};

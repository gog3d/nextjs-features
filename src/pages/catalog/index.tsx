import { FC, ReactNode } from 'react';

import dynamic from "next/dynamic";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import CatalogPageMobile from "@/components/screens/catalog-page-mobile";
//import CatalogPage from "@/components/screens/catalog-page";

const CatalogPage = dynamic(() => import("@/components/screens/catalog-page"), {
  ssr: false
})

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

interface ICatalogProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const  Catalog: FC <ICatalogProps> = ({ catalog, contacts }) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <CatalogPage catalog={catalog} contacts={contacts} />
             :
            <CatalogPageMobile catalog={catalog} contacts={contacts} />
        }
      </MediaQuery>
    </>
  )
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

export const getServerSideProps: GetServerSideProps<Props>  = async () => {

  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;
  const contacts: TContactsTypes = jsonData.contacts;
  return { props: { catalog, contacts } };
};

import { FC, ReactNode, useEffect} from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import DesignPageMobile from "@/components/screens/design-page-mobile";

import dynamic from "next/dynamic";

const CatalogPage = dynamic(() => import("@/components/screens/catalog-page"), {
  ssr: false
});

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
});


interface IDesignProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const Design: FC <IDesignProps> = ({ catalog, contacts }) => {
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <CatalogPage catalog={catalog} contacts={contacts}  initialType={'design'}/>
             :
            <DesignPageMobile catalog={catalog}/>
        }
      </MediaQuery>
    </>
  ) 
}

export default Design;


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
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog.items;
  const contacts: TContactsTypes = jsonData.contacts;
  return { props: { catalog, contacts } };
};


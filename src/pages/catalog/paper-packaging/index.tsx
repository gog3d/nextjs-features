import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import PaperPackagingPageMobile from "@/components/screens/paper-packaging-page-mobile";

import dynamic from "next/dynamic";

interface IPaperPackagingProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const CatalogPage = dynamic(() => import("@/components/screens/catalog-page"), {
  ssr: false
});


const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
});

const PaperPackaging: FC <IPaperPackagingProps> = ({ catalog, contacts }) => {
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <CatalogPage catalog={catalog} contacts={contacts} initialType={'paper-packaging'}/>
             :
            <PaperPackagingPageMobile catalog={catalog}/>
        }
      </MediaQuery>
    </>
  ) 
}


export default PaperPackaging;


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

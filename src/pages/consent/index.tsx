import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import ConsentPageMobile from "@/components/screens/consent-page-mobile";
import ConsentPage from "@/components/screens/consent-page";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

interface IConsentProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const Consent:FC <IConsentProps> = ({ catalog, contacts}) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <ConsentPage catalog={catalog} contacts={contacts}/>
             :
            <ConsentPageMobile catalog={catalog} contacts={contacts} />
        }
      </MediaQuery>
    </>
  )
}

export default Consent;

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

  return { props: { catalog, contacts} };
};

import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import PolicyPageMobile from "@/components/screens/policy-page-mobile";
import PolicyPage from "@/components/screens/policy-page";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

interface IPolicyProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const  Policy:FC <IPolicyProps> = ({ catalog, contacts}) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <PolicyPage catalog={catalog} contacts={contacts}/>
             :
            <PolicyPageMobile catalog={catalog} contacts={contacts}/>
        }
      </MediaQuery>
    </>
  )
}

export default Policy;

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


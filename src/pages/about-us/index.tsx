import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import AboutUsPageMobile from "@/components/screens/about-us-page-mobile";
import AboutUsPage from "@/components/screens/about-us-page";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})


interface IAboutUsProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const  AboutUs: FC <IAboutUsProps> = ({ catalog, contacts }) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <AboutUsPage catalog={catalog} contacts={contacts} />
             :
            <AboutUsPageMobile catalog={catalog} contacts={contacts} />
        }
      </MediaQuery>
    </>
  )
}

export default AboutUs;


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

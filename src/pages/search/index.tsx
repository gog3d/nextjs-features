import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TCatalogTypes, TContactsTypes, TMainTypes, TAboutTypes } from '@/types/data-types';

import SearchPageMobile from "@/components/screens/search-page-mobile";
import SearchPage from "@/components/screens/search-page";

import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})


interface ISearchProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
  pagesData: Array<{link: string, value: string}>
}

const  Search: FC<ISearchProps> = ({ catalog, pagesData, contacts }) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
          <SearchPage catalog={catalog} pagesData={pagesData} contacts={contacts}/>
             :
          <SearchPageMobile catalog={catalog} pagesData={pagesData} contacts={contacts}/>
        }
      </MediaQuery>
    </>
  )
}

export default Search;

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


//export const getStaticProps: GetServerSideProps<{cups  = async ({params}) => {
export const getServerSideProps: GetServerSideProps<Props>  = async () => {

const hashData = (obj: TDataTypes | TCatalogTypes | TContactsTypes | TMainTypes | TAboutTypes , arr: Array<any>, link: string) => {
  for (const [key, value] of Object.entries(obj)) {
    if (value.hasOwnProperty('link')) {
      hashData(value, arr, `${link}${value.link}`);
    } else {
      if (typeof value === 'object'){
        hashData(value, arr, `${link}`);
      } else {
        if (
          key !== 'id' &&  key !== 'type' &&
          key !== 'link' && key !== 'mobile' &&
          key !== 'desctop' && key !== 'color_1' &&
          key !== 'color_2' && value !== ''
         ) {
          arr.push({link, value});
        }
      }
    }
  }
  return arr;
};

  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const contacts: TContactsTypes = jsonData.contacts;
//  const pagesData = { ...jsonData };
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog.items;
//  console.log({pagesData})
  const arr: Array<{link: string, value: string}> = [{link: '', value: ''}];
  const pagesData = hashData(jsonData, arr, '');
  console.log({pagesData});
  return { props: { catalog, contacts, pagesData } };
};

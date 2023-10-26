import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import SearchPageMobile from "@/components/screens/search-page-mobile";

interface ISearchProps {
  catalog: Array<TCatalogItemsTypes>;
}


const  Search: FC<ISearchProps> = ({ catalog }) => {
    return <SearchPageMobile catalog={catalog} />;
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

  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const catalog: Array<TCatalogItemsTypes> = jsonData.catalog;
//  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;
  return { props: { catalog } };
};

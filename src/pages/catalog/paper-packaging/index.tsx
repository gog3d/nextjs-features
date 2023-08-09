import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import PaperPackagingPageMobile from "@/components/screens/paper-packaging-page-mobile";

interface IPaperPackagingProps {
  catalog: Array<TCatalogItemsTypes>;
}

const PaperPackaging: FC <IPaperPackagingProps> = ({ catalog }) => {
    return <PaperPackagingPageMobile catalog={catalog}/>;
}

export default PaperPackaging;


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

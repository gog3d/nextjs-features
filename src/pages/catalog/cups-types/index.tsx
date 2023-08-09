import { FC, ReactNode } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import CupsTypesPageMobile from '@/components/screens/cups-types-page-mobile';
import { TDataTypes, TCatalogItemsTypes, TCupTypes } from '@/types/data-types';

interface ICupsTypesProps {
  cups: Array<TCupTypes> | null;
}

const CupsTypes: FC<ICupsTypesProps> = ({ cups }) => {
  return (
    <CupsTypesPageMobile cups={cups}/>
  )
};

export default CupsTypes;

import {readFile} from 'fs/promises';
import path from 'path';
/*
interface Params extends ParsedUrlQuery {
   'cups-types': string;
}
*/

interface Props {
  cups: Array<TCupTypes> | null;
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
  const cups_items: TCatalogItemsTypes | undefined = jsonData.catalog.find(item => item.type === 'cups');
  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;
  return { props: { cups } };
};

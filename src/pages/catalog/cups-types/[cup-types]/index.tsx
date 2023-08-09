import { FC, ReactNode } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TCupTypes } from '@/types/data-types';

import CupTypesPageMobile from '@/components/screens/cup-types-page-mobile';

interface ICupProps {
  cupTypes: TCupTypes | null;
}

const CupTypes: FC<ICupProps> = ({cupTypes}) => {
  return (
    <CupTypesPageMobile cupTypes={cupTypes}/>
  );
};

export default CupTypes;

import {readFile} from 'fs/promises';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
   'cup-types': string;
}

interface Props {
  cupTypes: TCupTypes | null;
};

interface Errors {
  redirect: {
    destination: string;
  };
};


export const getServerSideProps: GetServerSideProps<Props, Params>  = async (context) => {
  const params = context.params!;
  const name = params['cup-types'];
  const filePath = path.join(process.cwd(), 'public/data/data.json');
  const data: Buffer = await readFile(filePath);

  const jsonData: TDataTypes  = await JSON.parse(data.toString());
  const cups_items: TCatalogItemsTypes | undefined = jsonData.catalog.find(item => item.type === 'cups');
  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;

  const types: TCupTypes | undefined  = cups ? cups.find((cup) => cup.name === name) : undefined;
  const cupTypes: TCupTypes | null = types ? types : null;
  return { props: { cupTypes } };
};


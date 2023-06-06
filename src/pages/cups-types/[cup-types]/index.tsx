import { FC, ReactNode } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TCup, TCupTypes, TData } from '../../../types/cups-data-types';

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

//read data.json

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
//  console.log(params);
  const params = context.params!;
  const name = params['cup-types'];
//  console.log(name);
  const filePath = path.join(process.cwd(), 'cups-data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TData  = await JSON.parse(data.toString());
  const types: TCupTypes | undefined = jsonData.cups.find((cup) => cup.name === name);
  const cupTypes = types ? types : null;
//  if (cupTypes) {
    return { props: { cupTypes } };
//  } else {
//    return { redirect: {destination: '/'} };
//  }
};


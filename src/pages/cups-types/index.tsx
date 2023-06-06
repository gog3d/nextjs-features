import { FC, ReactNode } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import CupsTypesPageMobile from '@/components/screens/cups-types-page-mobile';
import { TCupTypes, TData } from '../../types/cups-data-types';

interface ICupsTypesProps {
  cups: Array<TCupTypes>;
}

const CupsTypes: FC<ICupsTypesProps> = ({ cups }) => {
  return (
    <CupsTypesPageMobile cups={cups}/>
  )
};

export default CupsTypes;


//read data.json

import {readFile} from 'fs/promises';
import path from 'path';

export const getStaticProps: GetServerSideProps<{cups: Array<TCupTypes>}>  = async ({params}) => {
  console.log(params);
  const filePath = path.join(process.cwd(), 'public/cups/data/cups-data.json');
  const data: Buffer = await readFile(filePath);
  const jsonData: TData  = await JSON.parse(data.toString());
  const cups: Array<TCupTypes> = jsonData.cups;
  return { props: { cups } };
};

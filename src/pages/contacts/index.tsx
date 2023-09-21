import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TContactsTypes } from '@/types/data-types';

import ContactsPageMobile from "@/components/screens/contacts-page-mobile";

interface IContactsProps {
  contacts: Array<TContactsTypes>;
}

const Contacts: FC <IContactsProps> = ({ contacts }) => {
    return <ContactsPageMobile contacts={contacts} />;
}

export default Contacts;

import {readFile} from 'fs/promises';
import path from 'path';

interface Props {
  contacts: Array<TContactsTypes>;
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
  const contacts: Array<TContactsTypes> = jsonData.contacts;
//  const cups: Array<TCupTypes> | null = cups_items ? cups_items.items : null;
  return { props: { contacts } };
};


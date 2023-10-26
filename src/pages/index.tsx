import { FC, ReactNode } from 'react';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import HomePageMobile from "@/components/screens/home-page-mobile";
import HomePage from "@/components/screens/home-page";
import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

interface IHomeProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes;
}

const Home: FC <IHomeProps> = ({ catalog, contacts}) => {
  return (
    <>
      <MediaQuery minWidth={800}>
        {
          (matches) => matches ? 
            <HomePage catalog={catalog} contacts={contacts} />
             :
            <HomePageMobile catalog={catalog} contacts={contacts} />
        }
      </MediaQuery>
    </>
  )
}

export default Home;

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

  return { props: { catalog, contacts} };
};


/*
//import { useMediaQuery } from 'react-responsive'

  const query = useMediaQuery({ query: '(min-width: 700px)' });
  const [mounted, setMounted] = useState(false);
  const [isDesctop, setIsDesctop] = useState(query);


  useEffect(() => {
    setMounted(true);
  });

  useEffect(()=> {
    setIsDesctop(query)
  }, [query])



      {
        mounted && (
        <>
        {
          isDesctop ? <HomePage catalog={catalog} contacts={contacts} /> : <HomePageMobile catalog={catalog} contacts={contacts} />
          }
       </>
       )
      }


*/


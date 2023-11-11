import { FC, ReactNode } from 'react';
//import styles from './.module.css';

interface IErrorProps {
  children: ReactNode;
}

//const Error: FC<IErrorProps> = ({children}) => {
const Error = () => {
  return (
    <div>
      <p>Error</p>
    </div>
  );
};

export default Error;
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

import HomePage from '../components/HomePage';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar 

      
      />
      <Component {...pageProps} />
    <HomePage/>
   
    </>
  );
};

export default MyApp;

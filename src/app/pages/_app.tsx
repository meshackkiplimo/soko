import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import ProductCard from '../components/ProductCard';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ProductCard  {...pageProps} />
    </>
  );
};

export default MyApp;

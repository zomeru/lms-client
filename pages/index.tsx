import type { NextPage } from 'next';

import { Layout, Navbar, NextSeoHead, Footer } from '@/components';
import { Hero, HomeBooks, Contact } from '@/components/_page/Home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeoHead />
      <Navbar />
      <Layout>
        <Hero />
        <HomeBooks />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;

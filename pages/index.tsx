import type { NextPage } from 'next';

import { Layout, Navbar, NextSeoHead } from '@/components';
import { Hero, HomeBooks } from '@/components/_page/Home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeoHead />
      <Navbar />
      <Layout>
        <Hero />
        <HomeBooks />
      </Layout>
    </>
  );
};

export default Home;

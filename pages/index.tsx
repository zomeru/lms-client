import type { NextPage } from 'next';

import { Layout, NextSeoHead } from '@/components';
import { Hero, HomeBooks, Contact } from '@/components/_page/Home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <Hero />
        <HomeBooks />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;

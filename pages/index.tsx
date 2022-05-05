import type { NextPage } from 'next';

import { Layout, Navbar, Section, NextSeoHead } from '@/components';
import { Hero } from '@/components/_page/Home';
import { colors } from '@styles/theme';

const Home: NextPage = () => {
  return (
    <>
      <NextSeoHead />
      <Navbar />
      <Layout>
        <Section bgColor={colors.primary} className="">
          <Hero />
        </Section>
      </Layout>
    </>
  );
};

export default Home;

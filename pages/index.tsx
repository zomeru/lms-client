import type { NextPage } from 'next';

import { Layout, Navbar, Section } from '@/components';
import { Hero } from '@/components/page/Home';
import { colors } from '@styles/theme';

const Home: NextPage = () => {
  return (
    <>
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

import type { NextPage } from 'next';

import { Layout, Navbar, Section } from '@/components';
import { colors } from '@styles/theme';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Section bgColor={colors.primary} className="">
          <h1>Hello Next.js</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Home;

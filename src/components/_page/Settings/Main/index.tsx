import React from 'react';

import { Section } from '@/components';
import { useDimensions } from '@/hooks';
import { Sidebar, Content } from '..';
import { StyledMainSettings } from './style';

const Main = () => {
  const { width } = useDimensions();
  return (
    <Section
      minHeight={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledMainSettings>
        <Sidebar />
        <Content />
      </StyledMainSettings>
    </Section>
  );
};

export default Main;

import React, { useState } from 'react';

import { Section } from '@/components';
import { useDimensions } from '@/hooks';
import { Sidebar, Content } from '..';
import { StyledMainSettings } from './style';

const Main = () => {
  const { width } = useDimensions();

  const [selected, setSelected] = useState('Profile');

  console.log('selected', selected);

  return (
    <Section
      minHeight={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledMainSettings>
        <Sidebar selected={selected} setSelected={setSelected} />
        <Content selected={selected} />
      </StyledMainSettings>
    </Section>
  );
};

export default Main;

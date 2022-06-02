import React, { useState, useEffect } from 'react';

import { Section } from '@/components';
import { useDimensions } from '@/hooks';
import { useAuth } from '@/contexts/AuthContext';
// import { Content } from '..';
import { Sidebar, Content } from '..';
import { StyledMainSettings } from './style';

const Main = () => {
  const { user } = useAuth();
  const { width } = useDimensions();

  const [selected, setSelected] = useState('Profile');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
    }
  }, [user]);

  // console.log('userEmail', userEmail, user);

  console.log('selected', selected, user);

  return (
    <Section
      minHeight={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledMainSettings>
        {userEmail && (
          <Sidebar
            selected={selected}
            setSelected={setSelected}
            userEmail={userEmail}
          />
        )}

        <Content selected={selected} setSelected={setSelected} />
      </StyledMainSettings>
    </Section>
  );
};

export default Main;

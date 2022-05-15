import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Section } from '@/components';
import { useDimensions } from '@/hooks';
import { SimpleButton } from '@/components/Buttons';
import { StyledNotFound } from './style';

const NotFound = () => {
  const { width } = useDimensions();
  const router = useRouter();

  const [redirectDelay, setRedirectDelay] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      if (redirectDelay > 0) {
        setRedirectDelay(redirectDelay - 1);
      }
    }, 1000);
    if (redirectDelay === 0) router.push('/');
  }, [redirectDelay, router]);

  return (
    <Section
      height={
        width <= 1366 ? 'calc(100vh - var(--nav-height))' : 'calc(100vh - 30vh)'
      }
    >
      <StyledNotFound>
        <h2 className="header-1">404</h2>
        <h3 className="header-2">Page Not Found</h3>
        <p className="not-found-text">
          You will be automatically redirected to home page in {redirectDelay}s.
        </p>
        <SimpleButton text="Go home" />
      </StyledNotFound>
    </Section>
  );
};

export default NotFound;

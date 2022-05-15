import React, { useState } from 'react';
import Image from 'next/image';

import { Section } from '@/components';
import { TextInput } from '@/components/Input';
import { SimpleButton } from '@/components/Buttons';
// import { useDimensions } from '@/hooks';
import { LoginImage } from '@/assets';
import { keyGenerator } from '@/utils';
import { SIGN_IN_INPUTS, SIGN_UP_INPUTS } from '@/constants';
import { StyledAuthSection } from './style';

type AuthState = 'signin' | 'signup';
const AUTH_SIGN_IN = 'signin';
const AUTH_SIGN_UP = 'signup';

const AuthSection = () => {
  // const { width } = useDimensions();

  const [authState, setAuthState] = useState<AuthState>(AUTH_SIGN_IN);

  const inputs = authState === AUTH_SIGN_IN ? SIGN_IN_INPUTS : SIGN_UP_INPUTS;

  const handleSubmit = () => {
    if (authState === AUTH_SIGN_IN) {
      // login
    } else {
      // register
    }
  };

  const handleAuthStateChange = () => {
    if (authState === AUTH_SIGN_IN) {
      setAuthState(AUTH_SIGN_UP);
    } else {
      setAuthState(AUTH_SIGN_IN);
    }
  };

  return (
    <Section height="700px">
      <StyledAuthSection>
        <div className="image-container">
          <Image
            src={LoginImage}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            quality={80}
          />
        </div>
        <form action="" onSubmit={handleSubmit} className="form-container">
          <h2 className="form-header">
            {authState === AUTH_SIGN_IN ? 'Sign in' : 'Sign up'}
          </h2>
          <div className="input-container">
            {inputs.map(({ name, type }, i) => (
              <TextInput
                key={keyGenerator(i)}
                id={name.toLowerCase().replace(/ /g, '')}
                label={name}
                type={type}
                inputProps={{ required: true }}
                className="input"
              />
            ))}
          </div>
          <SimpleButton
            text={authState === AUTH_SIGN_IN ? 'Sign in' : 'Sign up'}
            type="submit"
          />
          <p className="auth-text">
            {authState === AUTH_SIGN_IN
              ? "Don't have an account? "
              : 'Already have an account? '}
            <span
              className="auth-text-link"
              onClick={handleAuthStateChange}
              onKeyDown={handleAuthStateChange}
              role="button"
              tabIndex={0}
            >
              {authState === AUTH_SIGN_IN ? 'Sign up' : 'Sign in'}.
            </span>
          </p>
        </form>
      </StyledAuthSection>
    </Section>
  );
};

export default AuthSection;

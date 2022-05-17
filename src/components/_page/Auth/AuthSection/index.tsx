import React, { useState } from 'react';
import Image from 'next/image';
import {
  doc,
  getDoc,
  getDocs,
  where,
  collection,
  query,
  serverTimestamp,
  setDoc
} from 'firebase/firestore';

import { Section } from '@/components';
import { TextInput } from '@/components/Input';
import { SimpleButton } from '@/components/Buttons';
import { db } from '@/utils/firebase';
import { hashPassword, comparePassword } from '@/utils/bcrypt';
import { strongRegex } from '@/utils/functions';
import { LoginImage } from '@/assets';
import { SIGN_IN_INPUTS, SIGN_UP_INPUTS } from '@/constants';
import { IUser } from '@/models/user';
import { USER_STORAGE_KEY } from '@/contexts/AuthContext';
import { StyledAuthSection } from './style';

type AuthState = 'signin' | 'signup';
const AUTH_SIGN_IN = 'signin';
const AUTH_SIGN_UP = 'signup';

const AuthSection = () => {
  const [authState, setAuthState] = useState<AuthState>(AUTH_SIGN_IN);
  const [textError, setTextError] = useState<string | null>(null);
  const [signUpSuccessText, setSignUpSuccessText] = useState<string | null>(
    null
  );

  // Sign_in states
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Sign_up states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputs = authState === AUTH_SIGN_IN ? SIGN_IN_INPUTS : SIGN_UP_INPUTS;

  const inputActionAndValues =
    authState === AUTH_SIGN_IN
      ? [
          { value: signInUsername, setValue: setSignInUsername },
          { value: signInPassword, setValue: setSignInPassword }
        ]
      : [
          { value: firstName, setValue: setFirstName },
          { value: lastName, setValue: setLastName },
          { value: email, setValue: setEmail },
          { value: username, setValue: setUsername },
          { value: password, setValue: setPassword },
          { value: confirmPassword, setValue: setConfirmPassword }
        ];

  const clearInputs = () => {
    inputActionAndValues.forEach(({ setValue }) => setValue && setValue(''));
    setTextError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authState === AUTH_SIGN_IN) {
      // ? LOG IN
      const docRef = doc(db, 'users', signInUsername);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists) {
        setTextError('Invalid username or password.');
        return;
      }

      const userData = docSnapshot.data() as IUser;

      if (userData) {
        const isPasswordCorrect = comparePassword(
          signInPassword,
          userData.password
        );

        if (isPasswordCorrect) {
          const newUserData: any = { ...userData };
          // @ts-ignore
          delete newUserData.password;
          window.localStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(newUserData)
          );

          setTimeout(() => {
            window.location.href = window.location.origin;
          }, 300);
        } else {
          setTextError('Invalid username or password.');
        }
      }
    } else {
      // ? REGISTER
      const userDocData: IUser = {
        firstName,
        lastName,
        username: username.toLowerCase(),
        email,
        password: hashPassword(password),
        role: ['User'],
        createdAt: serverTimestamp(),
        setupComplete: false,
        gender: null,
        age: null,
        photoUrl: null
      };

      // check if email already exists
      const docRef = doc(db, 'users', email);
      const docSnap = await getDoc(docRef);
      const emailTaken = docSnap.exists();

      if (emailTaken) {
        setTextError('Email already taken');
        return;
      }

      // check if username already exists
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username));
      const snapshot = await getDocs(q);
      const usernameTaken = snapshot.docs.length > 0;

      if (usernameTaken) {
        setTextError('Username already taken');
        return;
      }

      if (!strongRegex.test(password)) {
        setTextError(
          'Password must be at least 8 characters long and contain at least one number, one lowercase, one uppercase letter and one special character.'
        );
        return;
      }

      if (password !== confirmPassword) {
        setTextError('Passwords do not match');
        return;
      }

      await setDoc(doc(db, 'users', email), userDocData)
        .then(() => {
          const newUserData: any = { ...userDocData };
          // @ts-ignore
          delete newUserData.password;
          window.localStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(newUserData)
          );
          setSignUpSuccessText('Sign up successful.');
          clearInputs();
          setTimeout(() => {
            window.location.href = window.location.origin;
          }, 300);
        })
        .catch((err) => console.log('firebase error', err));

      // setLoading(false);
    }
  };

  const handleAuthStateChange = () => {
    setSignUpSuccessText(null);
    clearInputs();
    if (authState === AUTH_SIGN_IN) {
      setAuthState(AUTH_SIGN_UP);
    } else {
      setAuthState(AUTH_SIGN_IN);
    }
  };

  return (
    <Section height="800px">
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
          <div className="form-content-wrapper">
            <h2 className="form-header">
              {authState === AUTH_SIGN_IN ? 'Sign in' : 'Sign up'}
            </h2>
            <div className="input-container">
              {inputs.map(({ name, type }, i) => {
                const key = name.toLowerCase().replace(/ /g, '');

                return (
                  <TextInput
                    key={key}
                    id={key}
                    label={name}
                    type={type}
                    inputProps={{ required: true }}
                    className="input"
                    value={inputActionAndValues[i].value}
                    setValue={inputActionAndValues[i].setValue}
                  />
                );
              })}
            </div>
            {textError && <p className="simple-text-error">{textError}</p>}
            {signUpSuccessText && (
              <p className="simple-text-success">{signUpSuccessText}</p>
            )}
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
          </div>
        </form>
      </StyledAuthSection>
    </Section>
  );
};

export default AuthSection;

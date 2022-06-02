import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, query, where } from 'firebase/firestore';

import { Layout, Loader, NextSeoHead } from '@/components';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { IUser } from '@/models/user';
import { useCol } from '@/hooks';

const UserProfile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [newUser, queryLoading] = useCol<IUser>(
    query(
      collection(db, 'users'),
      where('username', '==', router.asPath.split('/')[2] ?? '')
    )
  );

  console.log('newUser', newUser);

  useEffect(() => {
    function checkUser() {
      if (!queryLoading) {
        if (user?.username === router.asPath.split('/')[2]) {
          setLoading(false);
          return;
        }

        router.push('/404');
      }
    }

    const timeout = setTimeout(checkUser, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [newUser, queryLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NextSeoHead />
      <Layout>
        <div>User profile here</div>
      </Layout>
    </>
  );
};

export default UserProfile;

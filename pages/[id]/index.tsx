import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc } from 'firebase/firestore';

import { Layout, Loader, NextSeoHead } from '@/components';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { IUser } from '@/models/user';
import { useDoc } from '@/hooks';

const UserProfile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [newUser, queryLoading] = useDoc<IUser>(
    doc(db, 'users', router.asPath.split('/')[1] ?? '')
  );

  // const [newUser, queryLoading] = useCol<IUser>(
  //   query(
  //     collection(db, 'users'),
  //     where('username', '==', router.asPath.split('/')[1] ?? '')
  //   )
  // );

  // console.log('newUser', newUser);
  // console.log('router.asPath.', router.asPath.split('/'));

  useEffect(() => {
    function checkUser() {
      if (!queryLoading) {
        const asPath = router.asPath.split('/')[1];

        if (user?.username === asPath || newUser?.username === asPath) {
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
  }, [queryLoading]);

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

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { Layout, Loader, NextSeoHead } from '@/components';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';

const UserProfile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', router.query.id));
      const snapshot = await getDocs(q);
      const userExists = snapshot.docs.length > 0;

      console.log('user', user?.username === router.query.id);
      console.log('user exists', userExists);

      if (user?.username === router.query.id || userExists) {
        setLoading(false);
        return;
      }

      router.push('/404');
    }

    const timeout = setTimeout(checkUser, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [user, router.query.id]);

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

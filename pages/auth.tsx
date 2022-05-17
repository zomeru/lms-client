import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Layout, Loader, NextSeoHead } from '@/components';
import { AuthSection } from '@/components/_page/Auth';
import { useAuth } from '@/contexts/AuthContext';

const Auth = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function checkUser() {
      if (user) {
        router.push('/');
        return;
      }
      setLoading(false);
    }

    const timeout = setTimeout(checkUser, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NextSeoHead />
      <Layout>
        <AuthSection />
      </Layout>
    </>
  );
};

export default Auth;

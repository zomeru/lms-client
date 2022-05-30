import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { SETTINGS_SIDEBAR } from '@/constants';
import { StyledSidebar } from './style';

const Sidebar = () => {
  const { user } = useAuth();

  const [role, setRole] = useState([]);

  console.log('role', role);

  useEffect(() => {
    async function getUserRole() {
      try {
        const docRef = doc(db, 'users', user?.email || '');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const newRole = docSnap.data().role;
          setRole(newRole);
        }
      } catch (error) {
        console.log('get user role error', error);
      }
    }

    getUserRole();
  }, [user]);

  return (
    <StyledSidebar>
      {SETTINGS_SIDEBAR.USER.map((el) => {
        return (
          <button type="button" className="sb-btn">
            <p>{el}</p>
          </button>
        );
      })}
    </StyledSidebar>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { SETTINGS_SIDEBAR } from '@/constants';
import { IRole } from '@/models/user';
import { StyledSidebar } from './style';

export interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ selected, setSelected }: SidebarProps) => {
  const { user } = useAuth();

  const [role, setRole] = useState<IRole[]>([]);

  useEffect(() => {
    async function getUserRole() {
      try {
        const docRef = doc(db, 'users', user?.email || '');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const newRole: IRole[] = docSnap.data().role;
          setRole(newRole);
        }
      } catch (error) {
        console.log('get user role error', error);
      }
    }

    getUserRole();
  }, [user]);

  const onSidebarButtonClick = (el: string) => {
    setSelected(el);
  };

  return (
    <StyledSidebar>
      <div className="role-section">
        <h3 className="role-header">Account Settings</h3>
        {SETTINGS_SIDEBAR.USER.map((el) => {
          console.log(selected === el);
          return (
            <button
              key={el}
              type="button"
              className={`sb-btn ${selected === el ? 'sb-btn-active' : ''}`}
              onClick={() => {
                onSidebarButtonClick(el);
              }}
            >
              <p className={selected === el ? 'sb-btn-active' : ''}>{el}</p>
            </button>
          );
        })}
      </div>
      <div className="role-section">
        <h3 className="role-header">Admin Settings</h3>
        {role.length > 0 &&
          role.includes('Admin') &&
          SETTINGS_SIDEBAR.ADMIN.map((el) => {
            return (
              <button
                key={el}
                type="button"
                className={`sb-btn ${selected === el ? 'sb-btn-active' : ''}`}
                onClick={() => {
                  onSidebarButtonClick(el);
                }}
              >
                <p className={selected === el ? 'sb-btn-active' : ''}>{el}</p>
              </button>
            );
          })}
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;

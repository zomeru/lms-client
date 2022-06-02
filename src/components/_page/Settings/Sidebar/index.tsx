import React, { useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';

import { db } from '@/utils/firebase';
import { SETTINGS_SIDEBAR } from '@/constants';
import { IUser } from '@/models/user';
import { useDoc } from '@/hooks';
import { StyledSidebar } from './style';

export interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
}

const Sidebar = ({ selected, setSelected, userEmail }: SidebarProps) => {
  const [newUser, setNewUser] = useState<IUser | null>(null);

  const [queryUser, loading] = useDoc<IUser>(doc(db, 'users', userEmail));

  useEffect(() => {
    if (!loading) {
      if (queryUser) {
        setNewUser(queryUser);
      }
    }
  }, [loading]);

  const onSidebarButtonClick = (el: string) => {
    setSelected(el);
  };

  return (
    <StyledSidebar>
      <div className="role-section">
        <h3 className="role-header">Account Settings</h3>
        {SETTINGS_SIDEBAR.USER.map((el) => {
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
        {!loading && newUser && newUser.role.includes('Admin') && (
          <h3 className="role-header">Admin Settings</h3>
        )}
        {!loading &&
          newUser &&
          newUser.role.includes('Admin') &&
          SETTINGS_SIDEBAR.ADMIN.map((el) => {
            const bookActive =
              selected === 'Add Book' && el === 'Books' ? 'sb-btn-active' : '';

            return (
              <button
                key={el}
                type="button"
                className={`sb-btn ${
                  selected === el ? 'sb-btn-active' : ''
                } ${bookActive}`}
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

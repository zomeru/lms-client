import React from 'react';
import { doc } from 'firebase/firestore';

import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/utils/firebase';
import { SETTINGS_SIDEBAR } from '@/constants';
import { IUser } from '@/models/user';
import { useDoc } from '@/hooks';
import { StyledSidebar } from './style';

export interface SidebarProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ selected, setSelected }: SidebarProps) => {
  const { user } = useAuth();

  const [newUser, loading] = useDoc<IUser>(doc(db, 'users', user?.email ?? ''));

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

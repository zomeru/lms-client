import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo
} from 'react';

import { IUser } from '@/models/user';
import { APP_NAME } from '@/constants';

export const USER_STORAGE_KEY = `${APP_NAME}_USER_KEY`;

interface AuthContextProps {
  user: IUser | null;
  loading: boolean;
  // signIn: (username: string, password: string) => void;
  // signUp: (user: IUser) => void;
  // signOut: () => void;
  // error: any;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true
  // signIn: () => {},
  // signUp: () => {},
  // signOut: () => {},
  // error: ''
});

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loggedInUser = localStorage.getItem(USER_STORAGE_KEY);
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    setLoading(false);
  }, []);

  const authProviderValue = useMemo(
    () => ({
      user,
      loading
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextProps => {
  const data = useContext(AuthContext);
  return { ...data };
};

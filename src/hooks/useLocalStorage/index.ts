import { useState } from 'react';

// TODO: improve so only keys in interface type is allowed
function useLocalStorage<T = void>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('useLocalStorage error 1:', error);
      return initialValue;
    }
  });

  // eslint-disable-next-line no-unused-vars
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log('useLocalStorage error 2:', error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;

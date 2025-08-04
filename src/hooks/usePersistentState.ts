import { useState, useEffect } from 'react';

function usePersistentState<T>(key: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      try {
        return JSON.parse(storageValue);
      } catch (e) {
        console.error("Error parsing JSON from localStorage", e);
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;

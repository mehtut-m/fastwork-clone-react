import { createContext, useEffect, useState } from 'react';

const LoadingContext = createContext();

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;

export { LoadingContext };

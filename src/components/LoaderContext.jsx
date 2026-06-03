import { createContext, useContext, useState } from "react";

const LoaderContext = createContext(false);

export function LoaderProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <LoaderContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}

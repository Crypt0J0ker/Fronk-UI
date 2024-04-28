import { createContext, useState } from "react";

export const AuthContext = createContext<{
  isOpenSidebar: boolean;
  setIsOpenSidebar?: any;
  isAuth: boolean;
  setIsAuth?: any;
  isLoading: boolean;
  setIsLoading?: any;
}>({ isOpenSidebar: false, isAuth: false, isLoading: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const value = {
    isOpenSidebar,
    setIsOpenSidebar,
    isAuth,
    setIsAuth,
    isLoading,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

"use client";

import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type ContextValue = {
  showPassword: boolean;
  showConfirmPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setShowConfirmPassword: Dispatch<SetStateAction<boolean>>;
};

export const contextApi = createContext<ContextValue | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const sharedData: ContextValue = {
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
  };

  return (
    <contextApi.Provider value={sharedData}>{children}</contextApi.Provider>
  );
};

export default ContextProvider;

import { contextApi } from "@/context/ContextApi";
import { useContext } from "react";

export const useUserInfo = () => {
  const contextValue = useContext(contextApi);

  if (!contextValue) {
    throw new Error("Something Went Wrong");
  }

  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = contextValue;

  return {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };
};

"use client";

import { contextApi } from "@/context/ContextApi";
import { useContext } from "react";

export const usePasswordToggle = () => {
  const contextValue = useContext(contextApi);

  if (!contextValue) {
    throw new Error("Something Went Wrong");
  }

  const {
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
  } = contextValue;

  const togglePasswordVisibility = () => {
    setShowPassword((previous) => !previous);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((previous) => !previous);
  };

  return {
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  };
};

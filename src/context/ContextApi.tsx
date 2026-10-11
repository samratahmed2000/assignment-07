"use client";

import { Category, Product } from "@/types/type";
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
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  category: Category | null;
  setCategory: Dispatch<SetStateAction<Category | null>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export const contextApi = createContext<ContextValue | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [sortBy, setSortBy] = useState("default");

  const sharedData: ContextValue = {
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    products,
    setProducts,
    category,
    setCategory,
    sortBy,
    setSortBy,
  };

  return (
    <contextApi.Provider value={sharedData}>{children}</contextApi.Provider>
  );
};

export default ContextProvider;

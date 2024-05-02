import StorageService from "@/core/storage.service";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token: string) => {
    StorageService.setItem("access_token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    StorageService.removeItem("access_token");
    setIsAuthenticated(false);
  };

  // Check if user is already authenticated on mount
  useEffect(() => {
    const token = StorageService.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

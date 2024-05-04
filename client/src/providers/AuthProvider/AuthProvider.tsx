import StorageService from "@/core/storage.service";
import { IUserAccount } from "@/interfaces/models";
import AuthService from "@/services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
  user: IUserAccount | null;
  login: (token: string, user: IUserAccount) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUserAccount | null>(null);

  const login = (token: string, user: IUserAccount) => {
    StorageService.setItem("access_token", token);
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    StorageService.removeItem("access_token");
    setIsAuthenticated(false);
  };

  // Check if user is already authenticated on mount
  useEffect(() => {
    if (user) return;

    const fetchUser = async () => {
      try {
        const token = StorageService.getItem("access_token");
        if (token) {
          const authService = new AuthService();
          const response = await authService.getCurrentUser();
          setUser(response);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };

    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
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

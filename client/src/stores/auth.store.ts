import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { IStores } from "@/interfaces";
import AuthService from "@/services/auth.service";

const initialState = {};

const useAuthStore = create<IStores.IAuthStore>((set) => ({
  ...initialState,
  isLogging: false,
  login: async (payload, options) => {
    set({ isLogging: true });
    try {
      const authService = new AuthService();
      const response = await authService.login(payload, options);
      set({ isLogging: false });
      console.log(response);
    } catch (error) {
      console.error(error);
      set({ isLogging: false });
    }
  },

  isRegistering: false,
  register: async (payload, options) => {
    set({ isRegistering: true });
    try {
      const authService = new AuthService();
      const response = await authService.register(payload, options);
      set({ isRegistering: false });
      console.log(response);
    } catch (error) {
      console.error(error);
      set({ isRegistering: false });
    }
  },
}));

export default useAuthStore;

if (import.meta.env.NODE_ENV === "development") {
  mountStoreDevtool("AuthStore", useAuthStore);
}

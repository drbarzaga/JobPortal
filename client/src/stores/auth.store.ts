import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { IStores } from "@/interfaces";
import AuthService from "@/services/auth.service";

const initialState = {
  termsConditionsModalOpen: false,
  setTermsConditionsModalOpen: () => {},

  isLogging: false,
  loginError: "",
  login: () => {},
  clearLoginError: () => {},

  registerSuccessMessage: "",
  registerErrorMessage: "",
  register: () => {},
  clearRegisterMessages: () => {},
};

const useAuthStore = create<IStores.IAuthStore>((set) => ({
  ...initialState,

  // This functions will be used to open and close the terms and conditions modal
  setTermsConditionsModalOpen: (value) => {
    set({ termsConditionsModalOpen: value });
  },

  // This function is used to call the login endpoint
  login: async (payload, options) => {
    set({ isLogging: true });
    try {
      const authService = new AuthService();
      const response = await authService.login(payload, options);
      set({ isLogging: false });
      return response;
    } catch (error: any) {
      console.error(error);
      set({ isLogging: false });
      set({ loginError: error.response.data.message });
      throw error;
    }
  },

  // This function is used to call the register endpoint
  register: async (payload, options) => {
    set({ registerSuccessMessage: "" });
    set({ registerErrorMessage: "" });
    try {
      const authService = new AuthService();
      const response = await authService.register(payload, options);
      set({ registerSuccessMessage: response.message });
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        set({ registerErrorMessage: error.response.data.message });
      }
      throw error;
    }
  },

  // This function is used to clear the login error message
  clearLoginError: () => {
    set({ loginError: "" });
  },

  // This function is used to clear the register success and error messages
  clearRegisterMessages: () => {
    set({ registerSuccessMessage: "" });
    set({ registerErrorMessage: "" });
  },
}));

export default useAuthStore;

if (import.meta.env.VITE_USER_NODE_ENV === "development") {
  mountStoreDevtool("AuthStore", useAuthStore);
}

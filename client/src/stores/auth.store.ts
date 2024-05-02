import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { IStores } from "@/interfaces";
import AuthService from "@/services/auth.service";
import { RequestStatus } from "@/enums";

const initialState = {
  termsConditionsModalOpen: false,
  setTermsConditionsModalOpen: () => {},

  isLogging: false,
  login: () => {},

  registerStatus: RequestStatus.IDLE,
  registerMessage: "",
  register: () => {},
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
    } catch (error) {
      console.error(error);
      set({ isLogging: false });
      throw error;
    }
  },

  // This function is used to call the register endpoint
  register: async (payload, options) => {
    set({ registerStatus: RequestStatus.LOADING });
    try {
      const authService = new AuthService();
      const response = await authService.register(payload, options);
      set({ registerMessage: response.message });
      set({ registerStatus: RequestStatus.SUCCESS });
    } catch (error: any) {
      set({ registerStatus: RequestStatus.ERROR });
      if (error.response) {
        set({ registerMessage: error.response.data.message });
      }
      throw error;
    }
  },
}));

export default useAuthStore;

if (import.meta.env.VITE_USER_NODE_ENV === "development") {
  mountStoreDevtool("AuthStore", useAuthStore);
}

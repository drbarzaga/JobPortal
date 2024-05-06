import { IModels } from "..";
import { ILoginResponse } from "../models";

export interface IAuthStore {
  termsConditionsModalOpen: boolean;
  setTermsConditionsModalOpen: (value: boolean) => void;

  isLogging: boolean;
  loginError: string;
  login: (
    payload: IModels.ILoginPayload,
    options?: any
  ) => Promise<ILoginResponse>;
  clearLoginError: () => void;

  registerSuccessMessage?: string;
  registerErrorMessage?: string;
  register: (payload: IModels.IRegisterPayload, options?: any) => Promise<void>;
  clearRegisterMessages: () => void;
}

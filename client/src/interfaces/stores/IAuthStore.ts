import { IModels } from "..";
import { IRequestStatus } from "../http-client/IRequestStatus";
import { ILoginResponse } from "../models";

export interface IAuthStore {
  termsConditionsModalOpen: boolean;
  setTermsConditionsModalOpen: (value: boolean) => void;

  isLogging: boolean;
  login: (
    payload: IModels.ILoginPayload,
    options?: any
  ) => Promise<ILoginResponse>;

  registerStatus: IRequestStatus;
  registerMessage: string;
  register: (payload: IModels.IRegisterPayload, options?: any) => Promise<void>;
}

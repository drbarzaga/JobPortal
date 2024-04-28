import { IModels } from "..";

export interface IAuthStore {
  isLogging: boolean;
  login: (payload: IModels.ILoginPayload, options?: any) => Promise<void>;

  isRegistering: boolean;
  register: (payload: IModels.IRegisterPayload, options?: any) => Promise<void>;
}

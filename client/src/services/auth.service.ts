// AuthService.ts

// This service is responsible for handling authentication requests.

import HttpService from "@/core/http.service";
import { IModels } from "@/interfaces";

export default class AuthService {
  private http: HttpService;

  constructor() {
    this.http = new HttpService();
  }

  // Login user
  public async login(payload: IModels.ILoginPayload, options?: any) {
    return this.http
      .service()
      .post<IModels.ILoginResponse, IModels.ILoginPayload>(
        "auth/login",
        payload,
        options
      );
  }

  // Register user
  public async register(payload: IModels.IRegisterPayload, options?: any) {
    return this.http
      .service()
      .post<IModels.IRegisterResponse, IModels.IRegisterPayload>(
        "auth/signup",
        payload,
        options
      );
  }

  // Get current user
  public async getCurrentUser() {
    return this.http.service().get<IModels.IUserAccount>("auth/me", {});
  }

  // Logout user
  public async logout() {
    // TODO: Implement logout
  }
}

import { injectable } from "inversify";
import { getEnv } from "../../config/env";
import { IUserService } from "./IUserSevice";

@injectable()
export class UserService implements IUserService {
  private readonly apiUrl;

  constructor() {
    this.apiUrl = getEnv().apiUrl;
  }
  signUpUser(): void {
    console.log("signupuser");
  }
  signInUser(email: string, password: string): string {
    console.log("signinuser");
    return "a";
  }
}

export interface IUserService {
  signUpUser(): void;
  signInUser(email: string, password: string): string;
}

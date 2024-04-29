import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { UserService } from "../services/userSevice/UserService";
import { IUserService } from "../services/userSevice/IUserSevice";

const myContainer = new Container();
myContainer.bind<IUserService>(TYPES.UserService).to(UserService);

export { myContainer };

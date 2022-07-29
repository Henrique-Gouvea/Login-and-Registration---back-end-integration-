import { IUser } from "../interfaces/IUser";
import { validateUser } from "../validation/userValidation";

async function create(user: IUser){
  validateUser(user);
}

export default {
  create,
}
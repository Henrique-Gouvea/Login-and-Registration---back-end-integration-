import { Router } from "express";
import userController from '../controllers/userController';

const routerUser = Router();

routerUser.post('/cadaster', userController.create)

export default routerUser;
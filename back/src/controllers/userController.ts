import  { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces/IUser';
import userService from '../services/userService';
import httpStatus from '../helpers/httpStatus'

async function create(req: Request, res: Response, next: NextFunction){
  try {
    const user: IUser = req.body;
    const responseUser = await userService.create(user);
    res.status(httpStatus.CREATED).json(responseUser);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
}
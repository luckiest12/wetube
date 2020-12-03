import express from "express";
import routes from "../routes";
import { users, userDetail, chagePassword, editProfile } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.changePassword, chagePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;

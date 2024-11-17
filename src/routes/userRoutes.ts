import { Router } from "express";
import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.route("/").post(UserController.create);
userRouter.route("/:userTestId").get(UserController.read);
userRouter.route("/").get(UserController.readAll);
userRouter.route("/:userTestId").put(UserController.update);
userRouter.route("/:userTestId").delete(UserController.delete);

export default userRouter;
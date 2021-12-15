import { Router } from "express";

const userRoutes = Router();

import { UserController } from "../resources/user/dtos/user.controller";

const userController = new UserController();

userRoutes.post("/signin", userController.signIn);

userRoutes.post("/signup", userController.signUp);

export default userRoutes;
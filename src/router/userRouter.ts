// Crie a pasta src/router 
// e configure o roteador userRouter

// Refatore o arquivo src/index.ts 
// para implementar o middleware de /users

import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

    const userController = new UserController()

userRouter.get("/", userController.getUsers)
userRouter.post("/", userController.createUser)




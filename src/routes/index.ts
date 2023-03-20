import { Router } from "express";
import taskRouter from "./task.routes";
import userRouter from "./user.routes";

const routes: Array<Router> = [userRouter, taskRouter];

export default routes;
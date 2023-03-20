"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const validationMiddleware_middleware_1 = require("../middlewares/validationMiddleware.middleware");
const user_shapes_1 = require("../shape/user.shapes");
const userRouter = express_1.default.Router();
userRouter.post('/user', (0, validationMiddleware_middleware_1.validateShape)(user_shapes_1.userSchema), user_controller_1.default.create);
userRouter.get('/user', user_controller_1.default.list);
userRouter.get('/user/:id', user_controller_1.default.get);
userRouter.patch('/user/:id', (0, validationMiddleware_middleware_1.validateShape)(user_shapes_1.updateSchema), user_controller_1.default.update);
userRouter.delete('/user/:id', user_controller_1.default.delete);
exports.default = userRouter;

import express from 'express'

import UserController from '../controllers/user.controller'
import validateAuthToken from '../middlewares/validateAuthToken.middleware'
import { validateShape } from '../middlewares/validateShape.middleware'
import {userSchema, updateSchema, loginSchema} from '../shape/user.shapes'

const userRouter = express.Router()

userRouter.post('/user', validateShape(userSchema), UserController.create)
userRouter.post('/user/login', validateShape(loginSchema), UserController.login)
/* userRouter.get('/user', UserController.list)
 */userRouter.get('/user', validateAuthToken, UserController.get)
userRouter.patch('/user', validateShape(updateSchema), validateAuthToken, UserController.update)
/* userRouter.delete('/user/:id', validateAuthToken, UserController.delete)
 */

export default userRouter
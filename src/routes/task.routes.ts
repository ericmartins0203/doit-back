import express from 'express'
import TaskController from '../controllers/task.controller'

import validateAuthToken from '../middlewares/validateAuthToken.middleware'
import { validateShape } from '../middlewares/validateShape.middleware'
import { taskSchema } from '../shape/task.shapes'

const taskRouter = express.Router()

taskRouter.post('/task', validateShape(taskSchema), validateAuthToken, TaskController.create)

export default taskRouter
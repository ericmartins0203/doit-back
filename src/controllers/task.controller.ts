import { Request, Response } from "express"
import { User } from "../entities/User"
import HTTP_STATUS from "../enums/HTTP_STATUS.enum"
import TaskService from "../services/task.service"
import UserService from "../services/user.service"

const taskService = new TaskService()
const userService = new UserService()

class TaskController {
    public static async create (request: Request, response: Response) {
        const { body, decoded } = request
        try {
            const user = await userService.get(decoded as string)
            const task = await taskService.create(body, user as User)

            response.status(HTTP_STATUS.CREATED).json(task)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json('e')
        }
    }

    public static async list (req: Request, res: Response) {
        const { decoded } = req
        try {
            const user = await userService.get(decoded as string)
            return await taskService.list(user as User)
        }catch (e) {
            if (e instanceof Error) {
                res.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json('e')
        }
    }

}

export default TaskController
import { Request, Response } from "express"

import HTTP_STATUS from "../enums/HTTP_STATUS.enum"
import UserService from "../services/user.service"

const userService = new UserService()

class UserController {
    public static async create (request: Request, response: Response) {
        const { body } = request
        try {
            const user = await userService.create(body)

            response.status(HTTP_STATUS.CREATED).json(user)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json('e')
        }
    }

    public static async login (request: Request, response: Response) {
        const { email, password } = request.body
    
        try {
          const authenticated = await userService.login(email, password)
          response.json(authenticated)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json('e')
        }
      }

    public static async get (request: Request, response: Response) {
        const { decoded } = request
        try {
            const user = await userService.get(decoded as string)

            response.status(HTTP_STATUS.OK).json(user)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    public static async update (request: Request, response: Response) {
        const { body } = request
        const email = request.decoded
        try {
            const users = await userService.update(email as string, body)

            response.status(HTTP_STATUS.OK).json(users)
        } catch (e) {
            if (e instanceof Error) {
                response.status(HTTP_STATUS.BAD_REQUEST).json(e.message)
            }
            response.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(e)
        }
    }

}

export default UserController
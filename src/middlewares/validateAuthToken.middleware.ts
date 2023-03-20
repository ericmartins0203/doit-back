import { NextFunction, Request, Response } from "express"
import jsonwebtoken, { JwtPayload } from "jsonwebtoken"
import HTTP_STATUS from "../enums/HTTP_STATUS.enum"

const validateAuthToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]

  const secret = process.env.SECRET_KEY || "secret"

  if (!token) {
    return res.status(HTTP_STATUS.FORBIDDEN).json({ message: "Missing authorization headers" })
  }

  jsonwebtoken.verify(token, secret, (e, decoded) => {
    if (e) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({ error: e.message })
    }

    const { email } = decoded as JwtPayload

      req.decoded = email

    return next()
  })
}

export default validateAuthToken
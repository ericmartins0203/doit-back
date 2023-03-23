import { Repository } from "typeorm"

import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { CreateUserDTO } from "../interfaces/user.interface";

class UserService {
    userRepository: Repository<User>

    constructor () {
        this.userRepository = AppDataSource.getRepository(User)
    }

    private async isEmailInDatabase (email: string) {
        const userFound = await this.userRepository.findOne({ where: { email } })

        return !!userFound
    }

    async create (createUserDTO: CreateUserDTO) : Promise<User> {
        const { name, email, password } = createUserDTO
        const isEmailInDatabase = await this.isEmailInDatabase(email)
  
        if (isEmailInDatabase) {
          	throw new Error("Email already exists")
        }
  
        const SALTS = process.env.SALT || 10 
  
        const newUserPayload = {
            name,
            email,
            password: await bcrypt.hash(password, SALTS)
        }
  
        return this.userRepository.save(newUserPayload)
      }

    async login (email: string, password: string) {  
        const user = await this.userRepository.findOne({ where: {email}})
  
        if (!user) {
          throw new Error()
        }
  
        const passwordMatches = await bcrypt.compare(password, user.password)
  
        if (!passwordMatches) {
          throw new Error()
        }
  
        const secret = process.env.SECRET_KEY || 'secret'
        const expiresIn = process.env.EXPIRES_IN || '4h'
  
        const accessToken = jwt.sign(
          { email: user.email },
          secret,
          {
            expiresIn
          }
        )
  
        return {
			accessToken, user
        }
      }

    async get (email: string) : Promise<User|string> {
        const user = await this.userRepository.findOne({ where: { email } })

        if(user){
            return user
        }
        throw new Error("Id não encontrado")
    }

    async update (email: string, body: User) : Promise<User> {
        const user = await this.userRepository.findOne({where:{email}})

        if (body.email) {
            if (await this.isEmailInDatabase(body.email)) {
                throw new Error("Email já existe")
            }
        }

        return this.userRepository.save({ ...user, ...body })
    }

}

export default UserService
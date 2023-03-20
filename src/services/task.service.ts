import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Task } from "../entities/Tasks"
import { User } from "../entities/User"
import { CreateTaskDTO } from "../interfaces/task.interface"

class TaskService {
    taskRepository: Repository<Task>

    constructor () {
        this.taskRepository = AppDataSource.getRepository(Task)
    }

    async create (createTaskDTO: CreateTaskDTO, user: User) : Promise<Task> {
        const { title, description } = createTaskDTO
       
        const newTaskPayload = {
            title,
            description,
            user: user
        }
  
        return this.taskRepository.save(newTaskPayload)
    }

    async list (user: User) : Promise<Task[]> {
  
        const list = this.taskRepository.find({
            where: {
                user
            }
        })
        return list
    }
}

export default TaskService
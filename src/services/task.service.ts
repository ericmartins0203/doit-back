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

    async list () : Promise<Task[]> {
        return this.taskRepository.find()
    }

    async complete (id: string, data: {completed:boolean}) : Promise<Task| null> {
        const task = await this.taskRepository.findOne({where:{id}})

        if(!task){
            throw new Error("Id não encontrado")
        }

        const updatedTask = this.taskRepository.create({...task, ...data})

        await this.taskRepository.save(updatedTask)
        return updatedTask
    }

    async delete (id: string) {
        this.taskRepository.delete({ id })
        return
    }
}

export default TaskService
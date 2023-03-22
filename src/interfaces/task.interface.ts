export interface CreateTaskDTO {
  user: string
  title: string;
  description?: string;
  createDate:Date;
  completed: boolean
}
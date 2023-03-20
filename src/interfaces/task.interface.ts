export interface CreateTaskDTO {
  user: string
  title: string;
  description?: string;
  completed: boolean
}
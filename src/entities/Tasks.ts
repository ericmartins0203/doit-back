import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string
    
    @Column({nullable: true})
    description: string
    
    @Column({default: false})
    completed: boolean
    
    @ManyToOne((type) => User, (user) => user.id)
    user: User;
}

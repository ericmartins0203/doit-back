import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { User } from "./User";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @CreateDateColumn()
    createDate: string
    
    @Column()
    title: string
    
    @Column({nullable: true})
    description: string
    
    @Column({default: false})
    completed: boolean

    
    @ManyToOne((type) => User, (user) => user.id, {onDelete: "CASCADE"})
    user: User;
}

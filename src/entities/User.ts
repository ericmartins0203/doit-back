import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Task } from "./Tasks"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    createDate: string

    @UpdateDateColumn()
    updateDate: string

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @OneToMany((type) => Task, (task) => task.user, {eager:true})
    tasks: Task[]
}

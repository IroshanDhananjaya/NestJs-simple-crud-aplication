/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, Entity ,PrimaryGeneratedColumn, OneToOne ,JoinColumn } from 'typeorm';
import { Profile } from './profile';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;

    @Column( {unique:true})
    username:string;

    @Column()
    password:string;

    @Column()
    createdAt:Date;

    @Column({nullable:true})
    authStrategy:string;

    @OneToOne(()=>Profile)
    @JoinColumn()
    profile:Profile
}

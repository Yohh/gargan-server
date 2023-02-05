import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { List } from '../lists/list.entity';
import { UserToPresent } from '../user-to-present/user-to-present.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10, unique: true })
  pseudo: string;

  @Column({ length: 20, unique: true })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ default: 'USER' })
  role: string;

  @OneToMany(() => List, (list) => list.user)
  lists: List[];

  @OneToMany(() => UserToPresent, (userToPresent) => userToPresent.user)
  userToPresents: UserToPresent[];
}

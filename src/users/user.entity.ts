import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { List } from '../lists/list.entity';
import { UserToPresent } from '../user-to-present/user-to-present.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  pseudo: string;

  @Column({ length: 20 })
  email: string;

  @Column({ length: 30 })
  password: string;

  @OneToMany(() => List, (list) => list.user)
  lists: List[];

  @OneToMany(() => UserToPresent, (userToPresent) => userToPresent.user)
  userToPresents: UserToPresent[];
}

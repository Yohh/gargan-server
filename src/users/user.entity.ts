import { UserToPresent } from 'src/user-to-present/user-to-present.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { List } from '../lists/list.entity';
import { Present } from '../presents/present.entity';

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

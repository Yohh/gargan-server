import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Present } from '../presents/present.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @Column()
  main: boolean;

  @Column({ length: 10 })
  category: string;

  @ManyToOne(() => User, (user) => user.lists)
  user: User;

  @OneToMany(() => Present, (present) => present.list)
  presents: Present[];
}

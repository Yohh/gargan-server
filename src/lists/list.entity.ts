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

  @Column()
  child: boolean;

  @ManyToOne(() => User, (user) => user.lists, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Present, (present) => present.list)
  presents: Present[];
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { List } from '../lists/list.entity';
import { UserToPresent } from '../user-to-present/user-to-present.entity';

@Entity()
export class Present {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  isUrgent: boolean;

  @Column({ length: 100 })
  link: string;

  @Column()
  expensiveRate: number;

  @ManyToOne(() => List, (list) => list.presents)
  list: List;

  @OneToMany(() => UserToPresent, (userToPresent) => userToPresent.present)
  userToPresents: UserToPresent[];
}

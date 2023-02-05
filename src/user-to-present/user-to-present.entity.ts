import { Present } from 'src/presents/present.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class UserToPresent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isExpensive: boolean;

  @Column()
  offeror: boolean;

  @Column()
  partOfferor: boolean;

  @Column()
  amount: number;

  @Column()
  percentage: number;

  @ManyToOne(() => User, (user) => user.userToPresents)
  user: User;

  @ManyToOne(() => Present, (present) => present.userToPresents)
  present: Present;
}

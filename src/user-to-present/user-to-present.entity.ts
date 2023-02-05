import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Present } from '../presents/present.entity';

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

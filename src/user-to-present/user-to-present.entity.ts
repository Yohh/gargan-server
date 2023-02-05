import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Present } from '../presents/present.entity';

@Entity()
export class UserToPresent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isExpensive: boolean;

  @Column({ default: true })
  offeror: boolean;

  @Column({ default: false })
  partOfferor: boolean;

  @Column({ default: 0 })
  amount: number;

  @Column({ default: 0 })
  percentage: number;

  @ManyToOne(() => User, (user) => user.userToPresents, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Present, (present) => present.userToPresents, {
    onDelete: 'CASCADE',
  })
  present: Present;
}

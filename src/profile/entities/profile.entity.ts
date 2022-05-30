import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Profile {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'character varying' })
  avatarUrl: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}

import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../entities/user.entity';

@Entity()
@ObjectType()
export class UserRole {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'character varying', length: 10 })
  roleCode: string;

  @Field(() => String)
  @Column({ type: 'character varying', length: 50 })
  roleName: string;

  @OneToMany(() => User, (user) => user.userRole)
  user: User[];
}

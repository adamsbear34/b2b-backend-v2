import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Media {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ type: 'character varying' })
  tenChatUrl: string;

  @Field(() => String)
  @Column({ type: 'character varying' })
  vkUrl: string;

  @Field(() => String)
  @Column({ type: 'character varying' })
  telegramUrl: string;

  @Field(() => String)
  @Column({ type: 'character varying' })
  ruTubeUrl: string;

  @Field(() => String)
  @Column({ type: 'character varying' })
  youTubeUrl: string;

  @OneToOne(() => User, (user) => user.media)
  user: User;
}

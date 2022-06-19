import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class RegisterUserResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => User)
  user: User;
}

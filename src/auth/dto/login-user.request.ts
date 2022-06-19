import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginUserRequest {
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email must be string' })
  @Field(() => String)
  email: string;

  @IsNotEmpty({ message: 'Password is required ' })
  @IsString({ message: 'Password must be string' })
  @Field(() => String)
  password: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

@InputType()
export class RegisterUserRequest {
  @IsString({ message: 'First name must be string ' })
  @IsNotEmpty({ message: 'First name is required' })
  @Field(() => String)
  firstName: string;

  @IsString({ message: 'Email number must be string' })
  @IsNotEmpty({ message: 'Email number is required' })
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty({ message: 'User role is required' })
  @IsNumber()
  @Field(() => Number)
  userRoleId: number;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @Field(() => String)
  password: string;
}

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserRequest } from './dto/login-user.request';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/gql-auth.guard';
import { User } from '../users/entities/user.entity';
import { RegisterUserRequest } from './dto/register-user.request';
import { RegisterUserResponse } from './dto/register-user.response';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse, { nullable: true })
  @UseGuards(GqlAuthGuard)
  signIn(@Args('loginUserRequest') loginUserRequest: LoginUserRequest) {
    return this.authService.signIn(loginUserRequest);
  }

  @Mutation(() => RegisterUserResponse, { nullable: true })
  signUp(
    @Args('registerUserRequest') registerUserRequest: RegisterUserRequest,
  ) {
    return this.authService.signUp(registerUserRequest);
  }
}

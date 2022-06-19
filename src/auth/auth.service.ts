import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserRequest } from './dto/login-user.request';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserRequest } from './dto/register-user.request';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async signIn(loginUserRequest: LoginUserRequest) {
    const user = await this.userService.findOneByEmail(loginUserRequest.email);
    const { password, ...result } = user;

    return {
      accessToken: this.jwtService.sign({
        email: user.email,
        sub: user.id,
      }),
      user: result,
    };
  }

  async signUp(registerUserRequest: RegisterUserRequest) {
    const user = await this.userService.create(registerUserRequest);
    const { password, ...result } = user;

    return {
      accessToken: this.jwtService.sign({
        email: user.email,
        sub: user.id,
      }),
      user: result,
    };
  }
}

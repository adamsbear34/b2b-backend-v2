import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserRequest } from '../auth/dto/register-user.request';
import * as bcrypt from 'bcrypt';
import { UserRole } from './user-role/entities/user-role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}


  async create(registerUserRequest: RegisterUserRequest) {
    const userCheck = await this.userRepository.findOne({
      where: { email: registerUserRequest.email },
    });

    const role = await this.userRoleRepository.findOne(
      registerUserRequest.userRoleId,
    );

    if (userCheck)
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );

    if (!role)
      throw new HttpException(
        'User role with this id does not exists',
        HttpStatus.BAD_REQUEST,
      );

    const password = await bcrypt.hash(registerUserRequest.password, 10);

    const newUser = new User();
    newUser.firstName = registerUserRequest.firstName;
    newUser.email = registerUserRequest.email;
    newUser.password = password;
    newUser.userRole = role;
    newUser.userName = await this.generateUserName(5);

    return await this.userRepository.save(newUser);
  }

  findAll() {
    return [
      {
        id: '123',
        userName: 'Evgeniy',
      },
    ];
  }

  findOne(id: number) {
    return [
      {
        id: '123',
        username: 'Evgeniy',
      },
    ];
  }
  async findOneByPhone(phone: string) {
    const user = await this.userRepository.findOne({
      where: {
        phone: phone,
      },
    });

    if (!user)
      throw new HttpException(
        'User with this phone does not exists',
        HttpStatus.NOT_FOUND,
      );

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user)
      throw new HttpException(
        'User with this email does not exists',
        HttpStatus.NOT_FOUND,
      );

    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async generateUserName(len: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const user = await this.userRepository.findOne({
      where: {
        userName: result,
      },
    });

    if (user) {
      await this.generateUserName(len + 1);
    }

    return result;
  }
}

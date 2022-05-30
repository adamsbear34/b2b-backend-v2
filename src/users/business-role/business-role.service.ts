import { Injectable } from '@nestjs/common';
import { CreateBusinessRoleInput } from './dto/create-business-role.input';
import { UpdateBusinessRoleInput } from './dto/update-business-role.input';

@Injectable()
export class BusinessRoleService {
  create(createBusinessRoleInput: CreateBusinessRoleInput) {
    return 'This action adds a new businessRole';
  }

  findAll() {
    return `This action returns all businessRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessRole`;
  }

  update(id: number, updateBusinessRoleInput: UpdateBusinessRoleInput) {
    return `This action updates a #${id} businessRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessRole`;
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BusinessRoleService } from './business-role.service';
import { BusinessRole } from './entities/business-role.entity';
import { CreateBusinessRoleInput } from './dto/create-business-role.input';
import { UpdateBusinessRoleInput } from './dto/update-business-role.input';

@Resolver(() => BusinessRole)
export class BusinessRoleResolver {
  constructor(private readonly businessRoleService: BusinessRoleService) {}

  @Mutation(() => BusinessRole)
  createBusinessRole(@Args('createBusinessRoleInput') createBusinessRoleInput: CreateBusinessRoleInput) {
    return this.businessRoleService.create(createBusinessRoleInput);
  }

  @Query(() => [BusinessRole], { name: 'businessRole' })
  findAll() {
    return this.businessRoleService.findAll();
  }

  @Query(() => BusinessRole, { name: 'businessRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.businessRoleService.findOne(id);
  }

  @Mutation(() => BusinessRole)
  updateBusinessRole(@Args('updateBusinessRoleInput') updateBusinessRoleInput: UpdateBusinessRoleInput) {
    return this.businessRoleService.update(updateBusinessRoleInput.id, updateBusinessRoleInput);
  }

  @Mutation(() => BusinessRole)
  removeBusinessRole(@Args('id', { type: () => Int }) id: number) {
    return this.businessRoleService.remove(id);
  }
}

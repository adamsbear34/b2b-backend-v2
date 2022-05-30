import { CreateBusinessRoleInput } from './create-business-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBusinessRoleInput extends PartialType(CreateBusinessRoleInput) {
  @Field(() => Int)
  id: number;
}

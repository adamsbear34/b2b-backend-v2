import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBusinessRoleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

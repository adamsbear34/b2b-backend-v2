import { Module } from '@nestjs/common';
import { BusinessRoleService } from './business-role.service';
import { BusinessRoleResolver } from './business-role.resolver';

@Module({
  providers: [BusinessRoleResolver, BusinessRoleService]
})
export class BusinessRoleModule {}

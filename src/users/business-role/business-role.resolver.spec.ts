import { Test, TestingModule } from '@nestjs/testing';
import { BusinessRoleResolver } from './business-role.resolver';
import { BusinessRoleService } from './business-role.service';

describe('BusinessRoleResolver', () => {
  let resolver: BusinessRoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessRoleResolver, BusinessRoleService],
    }).compile();

    resolver = module.get<BusinessRoleResolver>(BusinessRoleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

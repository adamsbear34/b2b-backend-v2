import { Test, TestingModule } from '@nestjs/testing';
import { BusinessRoleService } from './business-role.service';

describe('BusinessRoleService', () => {
  let service: BusinessRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessRoleService],
    }).compile();

    service = module.get<BusinessRoleService>(BusinessRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

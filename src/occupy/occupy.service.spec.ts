import { Test, TestingModule } from '@nestjs/testing';
import { OccupyService } from './occupy.service';

describe('OccupyService', () => {
  let service: OccupyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OccupyService],
    }).compile();

    service = module.get<OccupyService>(OccupyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

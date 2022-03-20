import { Test, TestingModule } from '@nestjs/testing';
import { OccupyController } from './occupy.controller';

describe('OccupyController', () => {
  let controller: OccupyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OccupyController],
    }).compile();

    controller = module.get<OccupyController>(OccupyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CaegoriesController } from './caegories.controller';
import { CaegoriesService } from './caegories.service';

describe('CaegoriesController', () => {
  let controller: CaegoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaegoriesController],
      providers: [CaegoriesService],
    }).compile();

    controller = module.get<CaegoriesController>(CaegoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

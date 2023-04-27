import { Test, TestingModule } from '@nestjs/testing';
import { CaegoriesService } from './caegories.service';

describe('CaegoriesService', () => {
  let service: CaegoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaegoriesService],
    }).compile();

    service = module.get<CaegoriesService>(CaegoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ImageInfoService } from './image-info.service';

describe('ImageInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageInfoService]
    });
  });

  it('should be created', inject([ImageInfoService], (service: ImageInfoService) => {
    expect(service).toBeTruthy();
  }));
});

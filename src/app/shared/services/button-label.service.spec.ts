import { TestBed, inject } from '@angular/core/testing';

import { ButtonLabelService } from './button-label.service';

describe('ButtonLabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonLabelService]
    });
  });

  it('should be created', inject([ButtonLabelService], (service: ButtonLabelService) => {
    expect(service).toBeTruthy();
  }));
});

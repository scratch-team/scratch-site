import { TestBed } from '@angular/core/testing';

import { CanvasDrawerService } from './canvas-drawer.service';

describe('CanvasDrawingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasDrawerService = TestBed.get(CanvasDrawerService);
    expect(service).toBeTruthy();
  });
});

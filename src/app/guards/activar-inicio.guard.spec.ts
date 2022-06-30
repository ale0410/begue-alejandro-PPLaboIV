import { TestBed } from '@angular/core/testing';

import { ActivarInicioGuard } from './activar-inicio.guard';

describe('ActivarInicioGuard', () => {
  let guard: ActivarInicioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivarInicioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

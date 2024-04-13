import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { invitadosGuardGuard } from './invitados-guard.guard';

describe('invitadosGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => invitadosGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

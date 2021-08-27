import { TestBed } from '@angular/core/testing';

import { ServicioSTService } from './servicio-st.service';

describe('ServicioSTService', () => {
  let service: ServicioSTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

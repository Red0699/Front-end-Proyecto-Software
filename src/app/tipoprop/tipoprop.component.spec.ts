import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipopropComponent } from './tipoprop.component';

describe('TipopropComponent', () => {
  let component: TipopropComponent;
  let fixture: ComponentFixture<TipopropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipopropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipopropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

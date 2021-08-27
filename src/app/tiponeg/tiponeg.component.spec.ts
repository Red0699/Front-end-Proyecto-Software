import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiponegComponent } from './tiponeg.component';

describe('TiponegComponent', () => {
  let component: TiponegComponent;
  let fixture: ComponentFixture<TiponegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiponegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiponegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

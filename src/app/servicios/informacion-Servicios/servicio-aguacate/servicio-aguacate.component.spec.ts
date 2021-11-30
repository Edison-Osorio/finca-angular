import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAguacateComponent } from './servicio-aguacate.component';

describe('ServicioAguacateComponent', () => {
  let component: ServicioAguacateComponent;
  let fixture: ComponentFixture<ServicioAguacateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioAguacateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAguacateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

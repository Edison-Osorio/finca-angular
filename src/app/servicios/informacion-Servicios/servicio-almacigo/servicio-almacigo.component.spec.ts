import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAlmacigoComponent } from './servicio-almacigo.component';

describe('ServicioAlmacigoComponent', () => {
  let component: ServicioAlmacigoComponent;
  let fixture: ComponentFixture<ServicioAlmacigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioAlmacigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAlmacigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

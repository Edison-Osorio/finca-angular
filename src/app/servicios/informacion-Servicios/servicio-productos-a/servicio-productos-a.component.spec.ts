import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioProductosAComponent } from './servicio-productos-a.component';

describe('ServicioProductosAComponent', () => {
  let component: ServicioProductosAComponent;
  let fixture: ComponentFixture<ServicioProductosAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioProductosAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioProductosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

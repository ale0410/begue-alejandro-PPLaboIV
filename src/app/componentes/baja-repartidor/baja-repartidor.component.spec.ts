import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaRepartidorComponent } from './baja-repartidor.component';

describe('BajaRepartidorComponent', () => {
  let component: BajaRepartidorComponent;
  let fixture: ComponentFixture<BajaRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

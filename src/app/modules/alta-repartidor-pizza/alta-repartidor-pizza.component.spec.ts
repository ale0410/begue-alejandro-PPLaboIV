import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartidorPizzaComponent } from './alta-repartidor-pizza.component';

describe('AltaRepartidorPizzaComponent', () => {
  let component: AltaRepartidorPizzaComponent;
  let fixture: ComponentFixture<AltaRepartidorPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaRepartidorPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRepartidorPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

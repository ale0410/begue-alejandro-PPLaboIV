import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRepartidorComponent } from './modificar-repartidor.component';

describe('ModificarRepartidorComponent', () => {
  let component: ModificarRepartidorComponent;
  let fixture: ComponentFixture<ModificarRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

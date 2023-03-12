import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeladoComponent } from './detalle-helado.component';

describe('DetalleHeladoComponent', () => {
  let component: DetalleHeladoComponent;
  let fixture: ComponentFixture<DetalleHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleHeladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

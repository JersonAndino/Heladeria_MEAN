import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHeladoComponent } from './buscar-helado.component';

describe('BuscarHeladoComponent', () => {
  let component: BuscarHeladoComponent;
  let fixture: ComponentFixture<BuscarHeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarHeladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

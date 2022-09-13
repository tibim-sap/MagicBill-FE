import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataFacturaFurnizorComponent } from './plata-factura-furnizor.component';

describe('PlataFacturaFurnizorComponent', () => {
  let component: PlataFacturaFurnizorComponent;
  let fixture: ComponentFixture<PlataFacturaFurnizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataFacturaFurnizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataFacturaFurnizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

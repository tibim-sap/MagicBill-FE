import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaProformaComponent } from './factura-proforma.component';

describe('FacturaProformaComponent', () => {
  let component: FacturaProformaComponent;
  let fixture: ComponentFixture<FacturaProformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaProformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

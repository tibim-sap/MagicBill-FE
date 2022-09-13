import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaStornoComponent } from './factura-storno.component';

describe('FacturaStornoComponent', () => {
  let component: FacturaStornoComponent;
  let fixture: ComponentFixture<FacturaStornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaStornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaStornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

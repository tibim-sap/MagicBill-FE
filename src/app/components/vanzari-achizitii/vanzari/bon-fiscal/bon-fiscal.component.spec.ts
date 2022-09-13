import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonFiscalComponent } from './bon-fiscal.component';

describe('BonFiscalComponent', () => {
  let component: BonFiscalComponent;
  let fixture: ComponentFixture<BonFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonFiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

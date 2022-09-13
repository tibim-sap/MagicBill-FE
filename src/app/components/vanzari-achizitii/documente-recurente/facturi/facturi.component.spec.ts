import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturiComponent } from './facturi.component';

describe('FacturiComponent', () => {
  let component: FacturiComponent;
  let fixture: ComponentFixture<FacturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

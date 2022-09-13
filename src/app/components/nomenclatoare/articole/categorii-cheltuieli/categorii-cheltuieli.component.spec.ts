import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriiCheltuieliComponent } from './categorii-cheltuieli.component';

describe('CategoriiCheltuieliComponent', () => {
  let component: CategoriiCheltuieliComponent;
  let fixture: ComponentFixture<CategoriiCheltuieliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriiCheltuieliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriiCheltuieliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

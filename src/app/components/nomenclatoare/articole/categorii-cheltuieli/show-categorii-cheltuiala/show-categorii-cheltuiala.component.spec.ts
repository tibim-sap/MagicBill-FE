import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategoriiCheltuialaComponent } from './show-categorii-cheltuiala.component';

describe('ShowCategoriiCheltuialaComponent', () => {
  let component: ShowCategoriiCheltuialaComponent;
  let fixture: ComponentFixture<ShowCategoriiCheltuialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategoriiCheltuialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCategoriiCheltuialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoriiCheltuialaComponent } from './add-edit-categorii-cheltuiala.component';

describe('AddEditCategoriiCheltuialaComponent', () => {
  let component: AddEditCategoriiCheltuialaComponent;
  let fixture: ComponentFixture<AddEditCategoriiCheltuialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCategoriiCheltuialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCategoriiCheltuialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

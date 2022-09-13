import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFurnizoriComponent } from './add-edit-furnizori.component';

describe('AddEditFurnizoriComponent', () => {
  let component: AddEditFurnizoriComponent;
  let fixture: ComponentFixture<AddEditFurnizoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFurnizoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFurnizoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGestiuniComponent } from './add-edit-gestiuni.component';

describe('AddEditGestiuniComponent', () => {
  let component: AddEditGestiuniComponent;
  let fixture: ComponentFixture<AddEditGestiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGestiuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGestiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

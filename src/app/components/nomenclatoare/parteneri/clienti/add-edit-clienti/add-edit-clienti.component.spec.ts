import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditClientiComponent } from './add-edit-clienti.component';

describe('AddEditClientiComponent', () => {
  let component: AddEditClientiComponent;
  let fixture: ComponentFixture<AddEditClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

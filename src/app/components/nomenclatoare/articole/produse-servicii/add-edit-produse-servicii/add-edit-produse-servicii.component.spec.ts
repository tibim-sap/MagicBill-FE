import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProduseServiciiComponent } from './add-edit-produse-servicii.component';

describe('AddEditProduseServiciiComponent', () => {
  let component: AddEditProduseServiciiComponent;
  let fixture: ComponentFixture<AddEditProduseServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProduseServiciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProduseServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

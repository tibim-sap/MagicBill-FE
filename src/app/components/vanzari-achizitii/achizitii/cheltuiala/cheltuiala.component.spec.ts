import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheltuialaComponent } from './cheltuiala.component';

describe('CheltuialaComponent', () => {
  let component: CheltuialaComponent;
  let fixture: ComponentFixture<CheltuialaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheltuialaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheltuialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

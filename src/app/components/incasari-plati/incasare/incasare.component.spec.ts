import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncasareComponent } from './incasare.component';

describe('IncasareComponent', () => {
  let component: IncasareComponent;
  let fixture: ComponentFixture<IncasareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncasareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncasareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

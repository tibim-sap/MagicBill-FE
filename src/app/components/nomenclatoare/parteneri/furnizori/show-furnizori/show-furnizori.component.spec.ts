import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFurnizoriComponent } from './show-furnizori.component';

describe('ShowFurnizoriComponent', () => {
  let component: ShowFurnizoriComponent;
  let fixture: ComponentFixture<ShowFurnizoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFurnizoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFurnizoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

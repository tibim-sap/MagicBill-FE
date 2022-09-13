import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGestiuniComponent } from './show-gestiuni.component';

describe('ShowGestiuniComponent', () => {
  let component: ShowGestiuniComponent;
  let fixture: ComponentFixture<ShowGestiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGestiuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGestiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

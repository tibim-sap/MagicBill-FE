import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustareStocComponent } from './ajustare-stoc.component';

describe('AjustareStocComponent', () => {
  let component: AjustareStocComponent;
  let fixture: ComponentFixture<AjustareStocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustareStocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustareStocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportIncasariComponent } from './raport-incasari.component';

describe('RaportIncasariComponent', () => {
  let component: RaportIncasariComponent;
  let fixture: ComponentFixture<RaportIncasariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportIncasariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportIncasariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

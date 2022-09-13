import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportTransferuriComponent } from './raport-transferuri.component';

describe('RaportTransferuriComponent', () => {
  let component: RaportTransferuriComponent;
  let fixture: ComponentFixture<RaportTransferuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportTransferuriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportTransferuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

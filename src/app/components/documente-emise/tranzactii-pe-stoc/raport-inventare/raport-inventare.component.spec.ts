import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportInventareComponent } from './raport-inventare.component';

describe('RaportInventareComponent', () => {
  let component: RaportInventareComponent;
  let fixture: ComponentFixture<RaportInventareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportInventareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportInventareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

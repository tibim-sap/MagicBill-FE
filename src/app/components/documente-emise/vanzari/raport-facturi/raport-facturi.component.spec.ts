import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportFacturiComponent } from './raport-facturi.component';

describe('RaportFacturiComponent', () => {
  let component: RaportFacturiComponent;
  let fixture: ComponentFixture<RaportFacturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportFacturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportFacturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

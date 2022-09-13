import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportProformeComponent } from './raport-proforme.component';

describe('RaportProformeComponent', () => {
  let component: RaportProformeComponent;
  let fixture: ComponentFixture<RaportProformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportProformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportProformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

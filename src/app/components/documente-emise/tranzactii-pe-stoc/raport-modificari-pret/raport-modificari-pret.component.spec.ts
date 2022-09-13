import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportModificariPretComponent } from './raport-modificari-pret.component';

describe('RaportModificariPretComponent', () => {
  let component: RaportModificariPretComponent;
  let fixture: ComponentFixture<RaportModificariPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportModificariPretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportModificariPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

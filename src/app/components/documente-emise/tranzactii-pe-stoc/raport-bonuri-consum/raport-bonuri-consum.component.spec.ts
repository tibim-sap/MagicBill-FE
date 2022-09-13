import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportBonuriConsumComponent } from './raport-bonuri-consum.component';

describe('RaportBonuriConsumComponent', () => {
  let component: RaportBonuriConsumComponent;
  let fixture: ComponentFixture<RaportBonuriConsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportBonuriConsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportBonuriConsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportAjustariStocComponent } from './raport-ajustari-stoc.component';

describe('RaportAjustariStocComponent', () => {
  let component: RaportAjustariStocComponent;
  let fixture: ComponentFixture<RaportAjustariStocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportAjustariStocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportAjustariStocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

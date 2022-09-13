import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportPlatiComponent } from './raport-plati.component';

describe('RaportPlatiComponent', () => {
  let component: RaportPlatiComponent;
  let fixture: ComponentFixture<RaportPlatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportPlatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportPlatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

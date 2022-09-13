import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduseServiciiComponent } from './produse-servicii.component';

describe('ProduseServiciiComponent', () => {
  let component: ProduseServiciiComponent;
  let fixture: ComponentFixture<ProduseServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduseServiciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduseServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

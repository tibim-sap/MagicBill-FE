import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProduseServiciiComponent } from './show-produse-servicii.component';

describe('ShowProduseServiciiComponent', () => {
  let component: ShowProduseServiciiComponent;
  let fixture: ComponentFixture<ShowProduseServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProduseServiciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProduseServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformeComponent } from './proforme.component';

describe('ProformeComponent', () => {
  let component: ProformeComponent;
  let fixture: ComponentFixture<ProformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

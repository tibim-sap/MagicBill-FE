import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportReceptiiFurnizoriComponent } from './raport-receptii-furnizori.component';

describe('RaportReceptiiFurnizoriComponent', () => {
  let component: RaportReceptiiFurnizoriComponent;
  let fixture: ComponentFixture<RaportReceptiiFurnizoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportReceptiiFurnizoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportReceptiiFurnizoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

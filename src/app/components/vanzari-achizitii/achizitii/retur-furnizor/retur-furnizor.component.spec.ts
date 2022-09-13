import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturFurnizorComponent } from './retur-furnizor.component';

describe('ReturFurnizorComponent', () => {
  let component: ReturFurnizorComponent;
  let fixture: ComponentFixture<ReturFurnizorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturFurnizorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturFurnizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

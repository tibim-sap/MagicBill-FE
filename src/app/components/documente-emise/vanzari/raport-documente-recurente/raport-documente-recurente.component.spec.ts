import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportDocumenteRecurenteComponent } from './raport-documente-recurente.component';

describe('RaportDocumenteRecurenteComponent', () => {
  let component: RaportDocumenteRecurenteComponent;
  let fixture: ComponentFixture<RaportDocumenteRecurenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportDocumenteRecurenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportDocumenteRecurenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

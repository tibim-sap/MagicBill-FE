import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportDocumenteFurnizoriComponent } from './raport-documente-furnizori.component';

describe('RaportDocumenteFurnizoriComponent', () => {
  let component: RaportDocumenteFurnizoriComponent;
  let fixture: ComponentFixture<RaportDocumenteFurnizoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportDocumenteFurnizoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportDocumenteFurnizoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

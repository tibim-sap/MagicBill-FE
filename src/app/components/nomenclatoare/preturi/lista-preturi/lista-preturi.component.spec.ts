import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreturiComponent } from './lista-preturi.component';

describe('ListaPreturiComponent', () => {
  let component: ListaPreturiComponent;
  let fixture: ComponentFixture<ListaPreturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreturiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPreturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

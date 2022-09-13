import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-inventare',
  templateUrl: './raport-inventare.component.html',
  styleUrls: ['./raport-inventare.component.scss']
})
export class RaportInventareComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "inventar", header: "Inventar"},
      {field: "gestiune", header: "Gestiune"},
      {field: "dataFinalizarii", header: "Data finalizarii"},
      {field: "diferente", header: "Diferente (RON)"},
      {field: "descriere", header: "Descriere"},
      {field: "actiuni", header: "Actiuni"}
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-ajustari-stoc',
  templateUrl: './raport-ajustari-stoc.component.html',
  styleUrls: ['./raport-ajustari-stoc.component.scss']
})
export class RaportAjustariStocComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "ajustariStoc", header: "Ajustari de stoc"},
      {field: "dataAjustarii", header: "Data ajustarii"},
      {field: "gestiune", header: "Gestiune"},
      {field: "valoare", header: "Valoare (RON)"},
      {field: "observatii", header: "Observatii"},
      {field: "actiuni", header: "Actiuni"}
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-facturi',
  templateUrl: './raport-facturi.component.html',
  styleUrls: ['./raport-facturi.component.scss']
})
export class RaportFacturiComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Factura"},
      {field: "denumireProdusServiciu", header: "Client"},
      {field: "moneda", header: "Data emiterii"},
      {field: "valTotala", header: "Valoare fara TVA"},
      {field: "restPlata", header: "Valoare TVA"},
      {field: "dataScadentei", header: "Total"},
      {field: "zileIntarziere", header: "Observatii"},
      {field: "status", header: "Status"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

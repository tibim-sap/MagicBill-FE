import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-proforme',
  templateUrl: './raport-proforme.component.html',
  styleUrls: ['./raport-proforme.component.scss']
})
export class RaportProformeComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Proforma"},
      {field: "denumireProdusServiciu", header: "Client"},
      {field: "moneda", header: "Data emiterii"},
      {field: "valTotala", header: "Valoare fara TVA"},
      {field: "restPlata", header: "Valoare TVA"},
      {field: "dataScadentei", header: "Total"},
      {field: "dataScadentei", header: "Facturata"},
      {field: "zileIntarziere", header: "Observatii"},
      {field: "status", header: "Status"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

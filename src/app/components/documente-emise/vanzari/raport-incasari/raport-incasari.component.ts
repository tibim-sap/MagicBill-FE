import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-incasari',
  templateUrl: './raport-incasari.component.html',
  styleUrls: ['./raport-incasari.component.scss']
})
export class RaportIncasariComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Tip incasare"},
      {field: "denumireProdusServiciu", header: "Nr. incasare"},
      {field: "moneda", header: "Client"},
      {field: "valTotala", header: "Factura"},
      {field: "restPlata", header: "Data incasarii"},
      {field: "dataScadentei", header: "Valoare totala"},
      {field: "zileIntarziere", header: "Observatii"},
      {field: "status", header: "Status"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

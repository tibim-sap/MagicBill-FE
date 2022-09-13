import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-documente-recurente',
  templateUrl: './raport-documente-recurente.component.html',
  styleUrls: ['./raport-documente-recurente.component.scss']
})
export class RaportDocumenteRecurenteComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Nr. abon."},
      {field: "denumireProdusServiciu", header: "Client"},
      {field: "moneda", header: "Data pornire"},
      {field: "valTotala", header: "Urmatoarea emitere"},
      {field: "restPlata", header: "Data terminare"},
      {field: "dataScadentei", header: "Frecventa"},
      {field: "zileIntarziere", header: "Valoare"},
      {field: "status", header: "Facturi ramase"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

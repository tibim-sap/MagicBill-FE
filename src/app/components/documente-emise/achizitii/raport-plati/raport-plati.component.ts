import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-plati',
  templateUrl: './raport-plati.component.html',
  styleUrls: ['./raport-plati.component.scss']
})
export class RaportPlatiComponent implements OnInit {

  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Tip"},
      {field: "denumireProdusServiciu", header: "Nr. Plata"},
      {field: "moneda", header: "Furnizor"},
      {field: "valTotala", header: "Doc. platit"},
      {field: "restPlata", header: "Data platii"},
      {field: "dataScadentei", header: "Valoare totala"},
      {field: "zileIntarziere", header: "Moneda"},
      {field: "status", header: "Actiuni"},
    ]
  }

}

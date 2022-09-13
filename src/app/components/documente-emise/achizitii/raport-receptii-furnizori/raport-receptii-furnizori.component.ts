import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-receptii-furnizori',
  templateUrl: './raport-receptii-furnizori.component.html',
  styleUrls: ['./raport-receptii-furnizori.component.scss']
})
export class RaportReceptiiFurnizoriComponent implements OnInit {

  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Reeceptii d ela furnizori"},
      {field: "denumireProdusServiciu", header: "Furnizor"},
      {field: "moneda", header: "Doc. insotitor"},
      {field: "valTotala", header: "Data receptie"},
      {field: "restPlata", header: "Gestiune"},
      {field: "dataScadentei", header: "Valoare fara TVA (RON)"},
      {field: "zileIntarziere", header: "Valoare TVA (RON)"},
      {field: "status", header: "Valoare totala (RON)"},
      {field: "actiuni", header: "Observatii"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

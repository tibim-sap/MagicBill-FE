import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raport-documente-furnizori',
  templateUrl: './raport-documente-furnizori.component.html',
  styleUrls: ['./raport-documente-furnizori.component.scss']
})
export class RaportDocumenteFurnizoriComponent implements OnInit {

  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Furnizor"},
      {field: "denumireProdusServiciu", header: "Document"},
      {field: "moneda", header: "Data doc."},
      {field: "valTotala", header: "Categorie"},
      {field: "restPlata", header: "Nr. NIR"},
      {field: "dataScadentei", header: "Gestiune"},
      {field: "zileIntarziere", header: "Valoare fara TVA"},
      {field: "status", header: "Valoare TVA"},
      {field: "actiuni", header: "Moneda"},
      {field: "actiuni", header: "Status"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

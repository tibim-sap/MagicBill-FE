import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-plata-factura-furnizor',
  templateUrl: './plata-factura-furnizor.component.html',
  styleUrls: ['./plata-factura-furnizor.component.scss']
})
export class PlataFacturaFurnizorComponent implements OnInit {
  public cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {field: "dataEmitere", header: "Data emiterii"},
      {field: "denumireProdusServiciu", header: "Document"},
      {field: "moneda", header: "Moneda"},
      {field: "valTotala", header: "Valoare totala"},
      {field: "restPlata", header: "Rest de plata"},
      {field: "dataScadentei", header: "Data scadentei"},
      {field: "zileIntarziere", header: "Zile intarziere"},
      {field: "status", header: "Status"},
      {field: "actiuni", header: "Actiuni"},
    ]
  }

}

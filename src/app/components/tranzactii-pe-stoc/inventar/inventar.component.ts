import { Component, OnInit } from '@angular/core';
import {ProduseServicii, Um} from "../../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {ProduseServiciiService} from "../../../services/produse-servicii.service";
import {ReturnDataService} from "../../../services/return-data.service";

@Component({
  selector: 'app-inventar',
  templateUrl: './inventar.component.html',
  styleUrls: ['./inventar.component.scss']
})
export class InventarComponent implements OnInit {

  public gestiune: any[];
  public produseServicii: ProduseServicii[];
  public selectedProduseServicii: ProduseServicii;
  public dateValue: Date;
  public cols: any[];
  public inventarProducts: any[] = [];
  public um: Um[];
  public selectedUm: Um;

  public inventarForm: FormGroup = new FormGroup({
    denumireProdusServiciu: new FormControl(''),
    um: new FormControl(''),
    cantitateFaptica: new FormControl(''),
  });

  public onSubmit(){
    const {denumireProdusServiciu, um, cantitateAjustata} = this.inventarForm.value

    console.log(this.inventarForm);
    const produs = {
      denumireProdusServiciu: denumireProdusServiciu.denumireProdus,
      um: um.name,
      cantitateAjustata
    }
    console.log("element", produs);
    this.inventarProducts.push(produs);
    console.log(this.inventarProducts);
    this.inventarForm.reset();
  }

  constructor(public produseServiciiS: ProduseServiciiService,
              public dateServiciu: ReturnDataService) { }

  ngOnInit(): void {
    this.produseServicii = this.produseServiciiS.returnProduseServicii();
    this.um = this.dateServiciu.returnUnitateMasura();

    this.cols = [
      {field: "denumireProdusServiciu", header: "Denumire produs"},
      {field: "um", header: "U.M."},
      {field: "cantitateScriptica", header: "Cantitate Scriptica"},
      {field: "cantitateFaptica", header: "Cantitate Faptica"},
      {field: "diferenta", header: "Diferenta"},
    ]
  }

}

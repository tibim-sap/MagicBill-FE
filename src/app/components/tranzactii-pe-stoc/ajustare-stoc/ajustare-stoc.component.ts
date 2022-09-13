import { Component, OnInit } from '@angular/core';
import {ProduseServicii, Um} from "../../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {ProduseServiciiService} from "../../../services/produse-servicii.service";
import {ReturnDataService} from "../../../services/return-data.service";

@Component({
  selector: 'app-ajustare-stoc',
  templateUrl: './ajustare-stoc.component.html',
  styleUrls: ['./ajustare-stoc.component.scss']
})
export class AjustareStocComponent implements OnInit {

  public gestiune: any[];
  public produseServicii: ProduseServicii[];
  public selectedProduseServicii: ProduseServicii;
  public dateValue: Date;
  public cols: any[];
  public ajustStocProducts: any[] = [];
  public um: Um[];
  public selectedUm: Um;

  public ajustareStocForm: FormGroup = new FormGroup({
    denumireProdusServiciu: new FormControl(''),
    um: new FormControl(''),
    cantitateAjustata: new FormControl(''),
  });

  public onSubmit(){
    const {denumireProdusServiciu, um, cantitateAjustata} = this.ajustareStocForm.value

    console.log(this.ajustareStocForm);
    const produs = {
      denumireProdusServiciu: denumireProdusServiciu.denumireProdus,
      um: um.name,
      cantitateAjustata
    }
    console.log("element", produs);
    this.ajustStocProducts.push(produs);
    console.log(this.ajustStocProducts);
    this.ajustareStocForm.reset();
  }

  constructor(public produseServiciiS: ProduseServiciiService,
              public dateServiciu: ReturnDataService) { }

  ngOnInit(): void {
    this.produseServicii = this.produseServiciiS.returnProduseServicii();
    this.um = this.dateServiciu.returnUnitateMasura();

    this.cols = [
      {field: "denumireProdusServiciu", header: "Denumire produs"},
      {field: "um", header: "U.M."},
      {field: "cantitateAjustata", header: "Cantitate ajustata"},
    ]

  }

}

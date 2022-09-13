import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Moneda, SelectItemGroup, TipDocument} from '../../../../interfaces';

// SERVICII
import { ReturnDataService } from '../../../../services/return-data.service';


@Component({
  selector: 'app-cheltuiala',
  templateUrl: './cheltuiala.component.html',
  styleUrls: ['./cheltuiala.component.scss']
})
export class CheltuialaComponent implements OnInit {

  public categorieCheltuiala: SelectItemGroup[];
  public cols: any[];
  public products: any[] = [];
  public moneda: Moneda[];
  public selectedMoneda: Moneda;
  public dateValue: Date;
  public tipDocument: TipDocument[];

  public cheltuialaForm: FormGroup = new FormGroup({
    categorie: new FormControl(''),
    denumireProdusServiciu: new FormControl(''),
    valoare: new FormControl(''),
  });

  constructor(public dateServiciu: ReturnDataService) {  }

  public onSubmit(){
    const { categoria, denumireProdusServiciu, valoare} = this.cheltuialaForm.value

    console.log(this.cheltuialaForm);
    const produs = {
      categoria,
      denumireProdusServiciu,
      valoare,
    }
    console.log("element", produs);
    this.products.push(produs);
    console.log(this.products);
    this.cheltuialaForm.reset();
  }

  ngOnInit(): void {
    this.categorieCheltuiala = this.dateServiciu.returnCategorieCheltuiala();
    this.moneda = this.dateServiciu.returnMoneda();
    this.tipDocument = this.dateServiciu.returnTipDocument();

    this.cols = [
      {field: "categorie", header: "Categorie"},
      {field: "denumireProdusServiciu", header: "Denumire produs/serviciu"},
      {field: "valoare", header: "Valoare"}
    ]
  }

}

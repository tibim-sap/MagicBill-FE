import { Component, OnInit } from '@angular/core';

// Servicii
import { ReturnDataService } from '../../../../services/return-data.service';
import {Categorii, Client, Moneda, SelectItemGroup} from "../../../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-categorii-cheltuieli',
  templateUrl: './categorii-cheltuieli.component.html',
  styleUrls: ['./categorii-cheltuieli.component.scss']
})
export class CategoriiCheltuieliComponent implements OnInit {

  public categorieCheltuiala: SelectItemGroup[];

  public showAddDialog = false;
  public cols: any[];

  public categorieForm: FormGroup = new FormGroup({
    denumireCategorie: new FormControl(''),
    detalii: new FormControl(''),
  });

  public denCat: Categorii[] = [
    {
      denumireCategorie: 'string',
      detalii: 'string'
    }
  ];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public dateServiciu: ReturnDataService) { }

  public showDialog() {
    this.showAddDialog = true;
  }

  public onSubmit() {
    const ele = this.categorieForm.value;
    this.denCat.push(ele);
    this.showAddDialog = false;
    this.categorieForm.reset();
  }

  ngOnInit(): void {
    this.categorieCheltuiala = this.dateServiciu.returnCategorieCheltuiala();

    this.cols = [
      {field: "denumireCategorie", header: "Denumire categorie"},
      {field: "detalii", header: "Detalii"},
    ]
  }

}

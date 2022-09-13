import {Component, Input, OnInit} from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-add-edit-categorii-cheltuiala',
  templateUrl: './add-edit-categorii-cheltuiala.component.html',
  styleUrls: ['./add-edit-categorii-cheltuiala.component.css']
})
export class AddEditCategoriiCheltuialaComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  @Input() catChelt:any;
  CategorieID: string;
  CategorieParinte: string;
  DenumireCategorie: string;
  Descriere: string;

  ngOnInit(): void {
    this.CategorieID =  this.catChelt.CategorieID;
    this.CategorieParinte = this.catChelt.CategorieParinte;
    this.DenumireCategorie = this.catChelt.DenumireCategorie;
    this.Descriere = this.catChelt.Descriere;
  }

  addCategorieCheltuiala(){
    var val = {
      CategorieID: this.CategorieID,
      CategorieParinte: this.CategorieParinte,
      DenumireCategorie: this.DenumireCategorie,
      Descriere: this.Descriere
    };
    this.service.addCategorieCheltuiala(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategorieCheltuiala(){
    var val = {
      CategorieID:this.CategorieID,
      CategorieParinte: this.CategorieParinte,
      DenumireCategorie: this.DenumireCategorie,
      Descriere: this.Descriere
    };
    this.service.updateCategorieCheltuiala(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}

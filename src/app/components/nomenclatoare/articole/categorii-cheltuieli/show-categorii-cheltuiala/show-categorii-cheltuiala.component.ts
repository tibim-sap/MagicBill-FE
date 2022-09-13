import { Component, OnInit } from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-show-categorii-cheltuiala',
  templateUrl: './show-categorii-cheltuiala.component.html',
  styleUrls: ['./show-categorii-cheltuiala.component.css']
})
export class ShowCategoriiCheltuialaComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  CatCheltList: any=[];

  ModalTitle: string;
  ActivateAddEditCatCheltComp: boolean = false;
  catChelt: any;

  ngOnInit(): void {
    this.refreshCatCheltList();
  }

  addClick(){
    this.catChelt={
      CategorieID: 0,
      CategorieParinte: "",
      DenumireCategorie: "",
      Descriere: ""
    }
    this.ModalTitle = "Adauga cheltuiala";
    this.ActivateAddEditCatCheltComp = true;
  }

  closeClick(){
    this.ActivateAddEditCatCheltComp = false;
    this.refreshCatCheltList();
  }

  editClick(item){
    this.catChelt = item;
    this.ModalTitle = "Editare Categorie"
    this.ActivateAddEditCatCheltComp= true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCategorieCheltuiala(item.CategorieID).subscribe(data=> {
        alert(data.toString());
        this.refreshCatCheltList();
      })
    }
  }

  refreshCatCheltList(){
    this.service.getCategorieCheltuialaList().subscribe(data=>{
      this.CatCheltList=data;
    });
  }

}

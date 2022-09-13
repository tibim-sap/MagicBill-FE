import { Component, OnInit } from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-show-produse-servicii',
  templateUrl: './show-produse-servicii.component.html',
  styleUrls: ['./show-produse-servicii.component.css']
})
export class ShowProduseServiciiComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  ProdServList: any=[];

  ModalTitle: string;
  ActivateAddEditProdServComp: boolean = false;
  prodServ: any;

  ngOnInit(): void {
    this.refreshProdServList();
  }

  addClick(){
    this.prodServ={
      produsServiciuId: 0,
      denumireProdusServiciu: "",
      tip: "",
      pretStandard: "",
      um: "",
      moneda: ""
    }
    this.ModalTitle = "Adauga furnizor";
    this.ActivateAddEditProdServComp = true;
  }

  closeClick(){
    this.ActivateAddEditProdServComp = false;
    this.refreshProdServList();
  }

  editClick(item){
    this.prodServ = item;
    this.ModalTitle = "Editare Furnizor"
    this.ActivateAddEditProdServComp= true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProdusServiciu(item.produsServiciuId).subscribe(data=> {
        alert(data.toString());
        this.refreshProdServList();
      })
    }
  }

  refreshProdServList(){
    this.service.getProdusServiciuiList().subscribe(data=>{
      this.ProdServList=data;
    });
  }

}

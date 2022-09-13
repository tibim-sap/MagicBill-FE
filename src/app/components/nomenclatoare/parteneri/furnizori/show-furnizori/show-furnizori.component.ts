import { Component, OnInit } from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-show-furnizori',
  templateUrl: './show-furnizori.component.html',
  styleUrls: ['./show-furnizori.component.css']
})
export class ShowFurnizoriComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  FurnizoriList: any=[];

  ModalTitle: string;
  ActivateAddEditFurnComp: boolean = false;
  furn: any;

  ngOnInit(): void {
    this.refreshFurnList();
  }

  addClick(){
    this.furn={
      FurnizoriId: 0,
      cif: "",
      denumireFurnizor: "",
      regCom: "",
      codClient: "",
      adresa: "",
      localitate: "",
      judet: "",
      tara: "",
      iban: "",
      banca: "",
      email: "",
      persoanaContact: "",
      telefon: ""
    }
    this.ModalTitle = "Adauga furnizor";
    this.ActivateAddEditFurnComp = true;
  }

  closeClick(){
    this.ActivateAddEditFurnComp = false;
    this.refreshFurnList();
  }

  editClick(item){
    this.furn = item;
    this.ModalTitle = "Editare Furnizor"
    this.ActivateAddEditFurnComp= true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteFurnizori(item.FurnizoriId).subscribe(data=> {
        alert(data.toString());
        this.refreshFurnList();
      })
    }
  }

  refreshFurnList(){
    this.service.getFurnizoriList().subscribe(data=>{
      this.FurnizoriList=data;
    });
  }

}

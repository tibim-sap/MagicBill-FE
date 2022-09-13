import { Component, OnInit } from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-show-gestiuni',
  templateUrl: './show-gestiuni.component.html',
  styleUrls: ['./show-gestiuni.component.css']
})
export class ShowGestiuniComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  GestiuniList:any=[];

  ModalTitle: string;
  ActivateAddEditGestiuniComp: boolean = false;
  gest: any;

  ngOnInit(): void {
    this.refreshGestList();
  }

  addClick(){
    this.gest={
      gestiuneId: 0,
      denumireGestiune: "",
      tipGestiune: "",
      gestionar: "",
      adresa: "",
      localitate: "",
      judet: "",
      tara: ""
    }
    this.ModalTitle = "Adauga gestiune";
    this.ActivateAddEditGestiuniComp = true;
  }

  closeClick(){
    this.ActivateAddEditGestiuniComp = false;
    this.refreshGestList();
  }

  editClick(item){
    this.gest = item;
    this.ModalTitle = "Editare gestiune"
    this.ActivateAddEditGestiuniComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteGestiune(item.gestiuneId).subscribe(data=> {
        alert(data.toString());
        this.refreshGestList();
      })
    }
  }

  refreshGestList(){
    this.service.getGestiuneList().subscribe(data=>{
      this.GestiuniList=data;
    });
  }

}

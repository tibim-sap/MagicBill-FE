import { Component, OnInit } from '@angular/core';
import { ServClientiService } from 'src/app/serv-clienti.service';

@Component({
  selector: 'app-show-clienti',
  templateUrl: './show-clienti.component.html',
  styleUrls: ['./show-clienti.component.css']
})
export class ShowClientiComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  ClientiList:any=[];

  ModalTitle: string;
  ActivateAddEditClieComp: boolean = false;
  clie: any;

  ngOnInit(): void {
    this.refreshClieList();
  }

  addClick(){
    this.clie={
      ClientiId: 0,
      cif: "",
      denumireClient: "",
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
    this.ModalTitle = "Adauga client";
    this.ActivateAddEditClieComp = true;
  }

  closeClick(){
    this.ActivateAddEditClieComp = false;
    this.refreshClieList();
  }

  editClick(item){
    this.clie = item;
    this.ModalTitle = "Editare Client"
    this.ActivateAddEditClieComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteClienti(item.ClientiId).subscribe(data=> {
        alert(data.toString());
        this.refreshClieList();
      })
    }
  }

  refreshClieList(){
    this.service.getClientiList().subscribe(data=>{
      this.ClientiList=data;
    });
  }

}

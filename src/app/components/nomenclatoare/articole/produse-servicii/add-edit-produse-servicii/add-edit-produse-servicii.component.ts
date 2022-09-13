import {Component, Input, OnInit} from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-add-edit-produse-servicii',
  templateUrl: './add-edit-produse-servicii.component.html',
  styleUrls: ['./add-edit-produse-servicii.component.css']
})
export class AddEditProduseServiciiComponent implements OnInit {

  constructor(private service:ServClientiService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  @Input() prodServ:any;
  produsServiciuId: string;
  denumireProdusServiciu: string;
  tip: string;
  pretStandard: string;
  um: string;
  moneda: string;

  ngOnInit(): void {
    this.produsServiciuId =  this.prodServ.produsServiciuId;
    this.denumireProdusServiciu = this.prodServ.denumireProdusServiciu;
    this.tip = this.prodServ.tip;
    this.pretStandard = this.prodServ.pretStandard;
    this.um = this.prodServ.um;
    this.moneda = this.prodServ.moneda;
  }

  addProdusServiciu(){
    var val = {
      produsServiciuId: this.produsServiciuId,
      denumireProdusServiciu: this.denumireProdusServiciu,
      tip: this.tip,
      pretStandard: this.pretStandard,
      um: this.um,
      moneda: this.moneda
    };
    this.service.addProdusServiciu(val).subscribe(res=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.denumireProdusServiciu} a fost adaugat cu succes`, life: 3000});
    });
  }

  updateProdusServiciu(){
    var val = {
      produsServiciuId:this.produsServiciuId,
      denumireProdusServiciu: this.denumireProdusServiciu,
      tip: this.tip,
      pretStandard: this.pretStandard,
      um: this.um,
      moneda: this.moneda
      };
    this.service.updateProdusServiciu(val).subscribe(res=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.denumireProdusServiciu} a fost modificat cu succes`, life: 3000});
    })
  }

}

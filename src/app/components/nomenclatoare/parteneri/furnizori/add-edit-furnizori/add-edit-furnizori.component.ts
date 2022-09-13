import { Component, Input, OnInit } from '@angular/core';
import { ServClientiService } from "../../../../../serv-clienti.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-add-edit-furnizori',
  templateUrl: './add-edit-furnizori.component.html',
  styleUrls: ['./add-edit-furnizori.component.css']
})
export class AddEditFurnizoriComponent implements OnInit {

  constructor(private service:ServClientiService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  @Input() furn:any;
  FurnizoriId: string;
  denumireFurnizor: string;
  regCom: string;
  codClient: string;
  adresa: string;
  localitate: string;
  judet: string;
  tara: string;
  iban: string;
  banca: string;
  email: string;
  persoanaContact: string;
  telefon: string;
  cif: string;

  ngOnInit(): void {
    this.FurnizoriId =  this.furn.FurnizoriId;
    this.cif = this.furn.cif;
    this.denumireFurnizor = this.furn.denumireFurnizor;
    this.regCom = this.furn.regCom;
    this.codClient = this.furn.codClient;
    this.adresa = this.furn.adresa;
    this.localitate = this.furn.localitate;
    this.judet = this.furn.judet;
    this.tara = this.furn.tara;
    this.iban = this.furn.iban;
    this.banca = this.furn.banca;
    this.email = this.furn.email;
    this.persoanaContact = this.furn.persoanaContact;
    this.telefon = this.furn.telefon;
  }

  addFurnizor(){
    var val = {
      FurnizoriId: this.FurnizoriId,
      cif: this.cif,
      denumireFurnizor: this.denumireFurnizor,
      regCom: this.regCom,
      codClient: this.codClient,
      adresa: this.adresa,
      localitate: this.localitate,
      judet: this.judet,
      tara: this.tara,
      iban: this.iban,
      banca: this.banca,
      email: this.email,
      persoanaContact: this.persoanaContact,
      telefon: this.telefon
    };
    this.service.addFurnizori(val).subscribe(res=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.denumireFurnizor} a fost adaugat cu succes`, life: 3000});
    });
  }

  updateFurnizor(){
    var val = {
      FurnizoriId:this.FurnizoriId,
      denumireFurnizor: this.denumireFurnizor,
      regCom: this.regCom,
      codClient: this.codClient,
      adresa: this.adresa,
      localitate: this.localitate,
      judet: this.judet,
      tara: this.tara,
      iban: this.iban,
      banca: this.banca,
      email: this.email,
      persoanaContact: this.persoanaContact,
      telefon: this.telefon,
      cif: this.cif};
    this.service.updateFurnizori(val).subscribe(res=>{
      this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.denumireFurnizor} a fost modificat cu succes`, life: 3000});
    })
  }

}

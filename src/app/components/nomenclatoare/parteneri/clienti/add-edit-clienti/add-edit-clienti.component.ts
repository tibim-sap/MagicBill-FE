import { Component, OnInit, Input } from '@angular/core';
import { ServClientiService } from 'src/app/serv-clienti.service';

@Component({
  selector: 'app-add-edit-clienti',
  templateUrl: './add-edit-clienti.component.html',
  styleUrls: ['./add-edit-clienti.component.css']
})
export class AddEditClientiComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  @Input() clie:any;
  ClientiId: string;
  denumireClient: string;
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
    this.ClientiId =  this.clie.ClientiId;
    this.cif = this.clie.cif;
    this.denumireClient = this.clie.denumireClient;
    this.regCom = this.clie.regCom;
    this.codClient = this.clie.codClient;
    this.adresa = this.clie.adresa;
    this.localitate = this.clie.localitate;
    this.judet = this.clie.judet;
    this.tara = this.clie.tara;
    this.iban = this.clie.iban;
    this.banca = this.clie.banca;
    this.email = this.clie.email;
    this.persoanaContact = this.clie.persoanaContact;
    this.telefon = this.clie.telefon;
  }

  addClient(){
    var val = {
      ClientiId: this.ClientiId,
      cif: this.cif,
      denumireClient: this.denumireClient,
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
    this.service.addClienti(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateClient(){
    var val = {
      ClientiId:this.ClientiId,
      denumireClient: this.denumireClient,
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
    this.service.updateClienti(val).subscribe(res=>{
      alert(res.toString())
    })
  }

}

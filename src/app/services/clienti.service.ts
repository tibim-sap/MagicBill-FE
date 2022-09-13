import { Injectable } from '@angular/core';
import {Client} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  public clienti: Client[] = [
    {
      cif: 'RO16828958',
      denumireClient: 'Pro Consult 2002 SRL',
      regCom: 'J40/458/2000',
      codClient: '200',
      adresa: 'bd. Pipera nr.10',
      localitate: 'Bucuresti',
      judet: 'Bucuresti',
      tara: 'Romania',
      iban: 'RO06RZBR2279643672128893',
      banca: 'Raiffeisen Bank',
      email: 'intel@google.ro',
      persContact: 'Alex Stan',
      telefon: '0755889352'
    },
    {
      cif: 'RO14799665',
      denumireClient: 'Supply Chain Management',
      regCom: 'J40/335/2006',
      codClient: '201',
      adresa: 'Bd. Iuliu Maniu nr. 57',
      localitate: 'Bucuresti',
      judet: 'Bucuresti',
      tara: 'Romania',
      iban: 'RO90INGB9574413648671642',
      banca: 'ING Bank',
      email: 'amd@yahoo.com',
      persContact: 'Dumitrescu Ion',
      telefon: '0748978200'
    },
    {
      cif: 'RO45211333',
      denumireClient: 'Micro Focus',
      regCom: 'J36/455/2002',
      codClient: '202',
      adresa: 'Str. Onisifor Ghibu nr. 20-24',
      localitate: 'Cluj-Napoca',
      judet: 'Cluj',
      tara: 'Romania',
      iban: 'RO11PORL8778519173532644',
      banca: 'Alpha Bank Romania',
      email: 'nvidia.test@google.ro',
      persContact: 'Nitu Vasile',
      telefon: '0766987882'
    },
    {
      cif: 'RO45211346',
      denumireClient: 'Intel',
      regCom: 'J36/455/2002',
      codClient: '203',
      adresa: 'Str. Onisifor Ghibu nr. 20-24',
      localitate: 'Cluj-Napoca',
      judet: 'Cluj',
      tara: 'Romania',
      iban: 'RO11PORL8778519173532644',
      banca: 'Alpha Bank Romania',
      email: 'nvidia.test@google.ro',
      persContact: 'Nitu Vasile',
      telefon: '0766987882'
    },
    {
      cif: 'RO45228333',
      denumireClient: 'Lufthansa Airlines',
      regCom: 'J36/455/2002',
      codClient: '204',
      adresa: 'Str. Onisifor Ghibu nr. 20-24',
      localitate: 'Cluj-Napoca',
      judet: 'Cluj',
      tara: 'Romania',
      iban: 'RO11PORL8778519173532644',
      banca: 'Alpha Bank Romania',
      email: 'nvidia.test@google.ro',
      persContact: 'Nitu Vasile',
      telefon: '0766987882'
    }
  ];

  constructor() { }

  public returnClienti(){
    return this.clienti;
  }
}

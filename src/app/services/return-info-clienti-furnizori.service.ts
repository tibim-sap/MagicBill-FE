import { Injectable } from '@angular/core';
import {Client} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ReturnInfoClientiFurnizoriService {

  public banks = [
    {name: 'Alpha Bank Romania'},
    {name: 'Banca Comerciala Romana'},
    {name: 'Banca Nationala a Romaniei'},
    {name: 'Banca Transilvania'},
    {name: 'BRD - Groupe Societe Generale'},
    {name: 'CEC Bank'},
    {name: 'Citibank Romania'},
    {name: 'ING Bank NV'},
    {name: 'Libra Bank'},
    {name: 'OTP Bank Romania'},
    {name: 'Raiffeisen Bank'},
    {name: 'Trezoreria statului'},
    {name: 'Unicredit Bank SA'}
  ];

  public cities = [
    {name: 'Alba', code: 'AB'},
    {name: 'Arad', code: 'AR'},
    {name: 'Arges', code: 'AG'},
    {name: 'Bacau', code: 'BC'},
    {name: 'Bihor', code: 'BH'},
    {name: 'Bistrita-Nasaud', code: 'BN'},
    {name: 'Botosani', code: 'BT'},
    {name: 'Brasov', code: 'BV'},
    {name: 'Braila', code: 'BR'},
    {name: 'Bucuresti', code: 'B'},
    {name: 'Buzau', code: 'BZ'},
    {name: 'Caras-Severin', code: 'CS'},
    {name: 'Calarasi', code: 'CL'},
    {name: 'Cluj', code: 'CJ'},
    {name: 'Constanta', code: 'CT'},
    {name: 'Covasna', code: 'CV'},
    {name: 'Dambovita', code: 'DB'},
    {name: 'Dolj', code: 'DJ'},
    {name: 'Galati', code: 'GL'},
    {name: 'Giurgiu', code: 'GR'},
    {name: 'Gorj', code: 'GJ'},
    {name: 'Harghita', code: 'HR'},
    {name: 'Hunedoara', code: 'HD'},
    {name: 'Ialomita', code: 'IL'},
    {name: 'Iasi', code: 'IS'},
    {name: 'Ilfov', code: 'IF'},
    {name: 'Maramures', code: 'MM'},
    {name: 'Mehedinti', code: 'MH'},
    {name: 'Mures', code: 'MS'},
    {name: 'Neamt', code: 'NT'},
    {name: 'Olt', code: 'OT'},
    {name: 'Prahova', code: 'PH'},
    {name: 'Satu Mare', code: 'SM'},
    {name: 'Salaj', code: 'SJ'},
    {name: 'Sibiu', code: 'SB'},
    {name: 'Suceava', code: 'SV'},
    {name: 'Teleorman', code: 'TR'},
    {name: 'Timis', code: 'TM'},
    {name: 'Tulcea', code: 'TL'},
    {name: 'Vaslui', code: 'VS'},
    {name: 'Valcea', code: 'VL'},
    {name: 'Vrancea', code: 'VN'}
  ];

  public clienti: Client[] = [
    {
      cif: 'RO16828958',
      denumireClient: 'Intel',
      regCom: 'J40/458/2000',
      codClient: '100',
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
      denumireClient: 'AMD',
      regCom: 'J40/335/2006',
      codClient: '112',
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
      denumireClient: 'NVIDIA',
      regCom: 'J36/455/2002',
      codClient: '101',
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

  public returnBanks() {
    return this.banks;
  }

  public returnCities() {
    return this.cities;
  }

  public returnClienti() {
    return this.clienti
  }
}

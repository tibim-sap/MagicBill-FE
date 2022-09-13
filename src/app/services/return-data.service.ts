import { Injectable } from '@angular/core';
import {Client} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ReturnDataService {

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
  ];

  public returnClienti(){
    return this.clienti;
  }



  public moneda = [
    {name: 'RON - Leu'},
    {name: 'EUR - Euro'},
    {name: 'USD - Dolar'},
    {name: 'GBP - Lira sterlina'},
    {name: 'CAD - Dolar canadian'},
    {name: 'AUD - Dolar australian'},
    {name: 'CHF - Franc elvetian'},
    {name: 'TRY - Lira turceasca'},
    {name: 'CZK - Coroana ceheasca'},
    {name: 'DKK - Coroana daneza'}
  ];

  public gestiune = [
    {name: 'Fara gestiune'},
  ]

  public termenPlata = [
    // {name: ' '},
    {name: 'La data emiterii'},
    {name: '7 zile'},
    {name: '15 zile'},
    {name: '30 de zile'},
    {name: '60 de zile'},
    {name: '90 de zile'},
    {name: 'Ultima zi a lunii curente'},
    {name: 'Ultima zi a lunii viitoare'},
    {name: 'Personalizat'},
  ]

  public unitateMasura = [
    {name: "buc"},
    {name: "pret/pers"},
    {name: "pret/grup"},
  ]
  public categorieCheltuiala = [
    {
      label: 'Utilitati',
      items: [
        {label: 'Energie electrica'},
        {label: 'Gaz'},
        {label: 'Apa'},
        {label: 'Telefon'},
        {label: 'Internet'},
        {label: 'Altele'}
      ]
    },
    {
      label: 'Servicii',
      items: [
        {label: 'Consultanta'},
        {label: 'Servicii online'},
        {label: 'Altele'}
      ]
    },
    {
      label: 'Auto',
      items: [
        {label: 'Combustibil'},
        {label: 'Casco'},
        {label: 'RCA'},
        {label: 'Vinieta'},
        {label: 'Reparatii auto'},
        {label: 'Piese auto'},
        {label: 'Altele'}
      ]
    },
    {
      label: 'Chirii',
      items: [
        {label: 'Chirie cladiri'},
        {label: 'Leasing'},
        {label: 'Altele'}
      ]
    },
    {
      label: 'Consumabile',
      items: [
        {label: 'Papetarie'},
        {label: 'Altele'}
      ]
    }
  ]

  public tipDocument = [
    {name: "Factura"},
    {name: "Proforma"},
    {name: "Bon fiscal"},
    {name: "Chitanta"},
    {name: "Ordin de plata"},
    {name: "Extras de cont"},
    {name: "Altul"}
  ]

  // Servicii date submeniu "PRODUSE/SERVICII"
  public tipProdus = [
    {name: 'Produs'},
    {name: 'Serviciu'}
  ];




  constructor() { }

  public returnTermenplata() {
    return this.termenPlata;
  }

  public returnUnitateMasura() {
    return this.unitateMasura;
  }

  public returnMoneda() {
    return this.moneda;
  }

  public returnGestiune() {
    return this.gestiune;
  }

  public returnCategorieCheltuiala() {
    return this.categorieCheltuiala;
  }

  public returnTipDocument() {
    return this.tipDocument;
  }

  public returnTipProdus() {
    return this.tipProdus;
  }

}

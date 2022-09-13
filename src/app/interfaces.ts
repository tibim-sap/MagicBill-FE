import {SelectItem} from "primeng/api/selectitem";
import {FormControl} from "@angular/forms";

export interface Client {
  cif: string;
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
  persContact: string;
  telefon: string;
}

export interface Furnizor {
  cif: string;
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
  persContact: string;
  telefon: string;
}

export interface City {
  name: string,
  code: string
}

export interface Bank {
  name: string
}

export interface TermenPlata{
  name: string;
}

export interface Moneda {
  name: string
}

export interface Um {
  name: string
}

export interface SelectItemGroup {
  label: string;
}

export interface TipDocument {
  name: string;
}

export interface  Categorii {
  denumireCategorie: string;
  detalii: string;
  // actiuni: string;
}

export interface TipProdus {
  name: string;
}

export interface ProduseServicii {
  denumireProdus: string,
  tipProdus: string,
  pretStandard: string,
  um: string,
  moneda: string,
}

export interface Calcul {
  totalTva: number;
  totalFaraTva: number;
  total: number;
}

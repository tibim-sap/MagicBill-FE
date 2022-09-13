import { Injectable } from '@angular/core';
import {Furnizor} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class FurnizoriService {
  public furnizori: Furnizor[] = [
    {
      cif: 'RO16828958',
      denumireFurnizor: 'PC Garage',
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
      cif: 'RO16828959',
      denumireFurnizor: 'Magazin Papetarie online',
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
      cif: 'RO16828578',
      denumireFurnizor: 'Papetarie si Birotica de la DCAP',
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
      cif: 'RO16827858',
      denumireFurnizor: 'DIGI',
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
      cif: 'RO16238958',
      denumireFurnizor: 'Engie',
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
      cif: 'RO16858958',
      denumireFurnizor: 'ENEL Muntenia SA',
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
      cif: 'RO16826958',
      denumireFurnizor: 'Vodafone',
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
    }
  ];

  constructor() { }

  public returnFurnizori(){
    return this.furnizori;
  }
}

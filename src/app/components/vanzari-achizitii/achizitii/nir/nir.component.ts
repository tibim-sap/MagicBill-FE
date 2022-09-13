import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Client, Furnizor, Moneda, ProduseServicii, TermenPlata, TipProdus, Um} from "../../../../interfaces";

// Servicii
import { ReturnDataService } from '../../../../services/return-data.service';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable';
import {ProduseServiciiService} from "../../../../services/produse-servicii.service";
import {FurnizoriService} from "../../../../services/furnizori.service";
import {CurrencyPipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-nir',
  templateUrl: './nir.component.html',
  styleUrls: ['./nir.component.scss']
})
export class NirComponent implements OnInit {

  public moneda: Moneda[];
  public selectedMoneda: Moneda;
  public termenPlata: TermenPlata[];
  public selectedTermenPlata: TermenPlata;
  public gestiune: any[];
  public selectedGestiune: any;
  public um: Um[];
  public selectedUm: Um;
  public dateValue: Date;
  public products: any[] = [];
  public exportColumns: any[];
  public cols: any[];
  public tipProdus: TipProdus[];
  public selectedTipProdus: TipProdus;
  public produseServicii: ProduseServicii[];
  public selectedProduseServicii: ProduseServicii;
  public furnizori: Furnizor[];
  public selectedFurnizor: Furnizor;

  public nirForm: FormGroup = new FormGroup({
    gestiune: new FormControl(''),
    denumireProdusServiciu: new FormControl(''),
    tipProdus: new FormControl(''),
    um: new FormControl(''),
    cantDoc: new FormControl(''),
    cantPrimita: new FormControl(''),
    pretAchizitie: new FormControl(''),
    cotaTva: new FormControl(''),
    pretVanzare: new FormControl(''),
    valoareStoc: new FormControl('')
  });

  constructor(public dateServiciu: ReturnDataService, public produseServiciiS: ProduseServiciiService, public furnizoriS:FurnizoriService, public cp:CurrencyPipe) { }

  public onSubmit(){
    const { gestiune, denumireProdusServiciu, tipProdus, um, cantPrimita, pretAchizitie, cotaTva, pretVanzare, valoareStoc} = this.nirForm.value

    console.log(this.nirForm);
    const produs = {
      gestiune: gestiune.name,
      denumireProdusServiciu: denumireProdusServiciu.denumireProdus,
      tipProdus,
      um: um.name,
      cantPrimita,
      pretAchizitie,
      valoare: pretAchizitie * cantPrimita,
      cotaTva: pretAchizitie * cantPrimita * 0.19,
      pretVanzare,
      valoareStoc: pretVanzare * cantPrimita
    }
    console.log("element", produs);
    this.products.push(produs);
    // const totalTva = this.products.reduce((a, {valTva}) => a + valTva, 0);
    // const totalFaraTva = this.products.reduce((a, {pretFaraTva}) => a + pretFaraTva, 0);
    // const total = this.products.reduce((a, {valoare}) => a + valoare, 0);
    //
    // this.calcul = {
    //   totalTva,
    //   totalFaraTva,
    //   total
    // }

    console.log(this.products);
    this.nirForm.reset();
  }

  ngOnInit(): void {
    this.moneda = this.dateServiciu.returnMoneda();
    this.um = this.dateServiciu.returnUnitateMasura();
    this.termenPlata = this.dateServiciu.returnTermenplata();
    this.gestiune = this.dateServiciu.returnGestiune();
    this.produseServicii = this.produseServiciiS.returnProduseServicii();
    this.tipProdus = this.dateServiciu.returnTipProdus();
    this.furnizori = this.furnizoriS.returnFurnizori();

    this.cols = [
      {field: "gestiune", header: "Gestiune"},
      {field: "denumireProdusServiciu", header: "Denumire produs / serviciu"},
      {field: "um", header: "U.M."},
      {field: "cantPrimita", header: "Cant."},
      {field: "pretAchizitie", header: "Pret", type: this.cp},
      {field: "valoare", header: "Valoare", type: this.cp},
      {field: "cotaTva", header: "TVA", type: this.cp},
      {field: "pretVanzare", header: "Pret Vanzare", type: this.cp},
      {field: "valoareStoc", header: "Valoare in stoc", type: this.cp},
    ]
  }

}

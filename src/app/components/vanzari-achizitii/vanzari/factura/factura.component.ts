import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Calcul, Client, Moneda, ProduseServicii, TermenPlata, Um} from "../../../../interfaces";

// Servicii
import { ReturnDataService } from '../../../../services/return-data.service';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable';
import {ClientiService} from "../../../../services/clienti.service";
import {ProduseServiciiService} from "../../../../services/produse-servicii.service";

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  public moneda: Moneda[];
  public selectedMoneda: Moneda;
  public termenPlata: TermenPlata[];
  public selectedTermenPlata: TermenPlata;
  public clienti: Client[];
  public selectedClient: Client;
  public produseServicii: ProduseServicii[];
  public selectedProduseServicii: ProduseServicii;
  public um: Um[];
  public selectedUm: Um;
  public gestiune: any[];
  public dateValue: Date;
  public products: any[] = [];
  // public exportColumns: any[];
  public cols: any[];
  public calcul: Calcul;


  public facturaForm: FormGroup = new FormGroup({
    gestiune: new FormControl(''),
    denumireProdusServiciu: new FormControl(''),
    um: new FormControl(''),
    cantitate: new FormControl(''),
    pretFaraTva: new FormControl(''),
    valoare: new FormControl(''),
    valTva: new FormControl('')
  });

  constructor(public dateServiciu: ReturnDataService,
              public clientiS: ClientiService,
              public produseServiciiS: ProduseServiciiService) {}

  public onSubmit(){
    const { gestiune, denumireProdusServiciu, um, cantitate, pretFaraTva, valoare, valTva} = this.facturaForm.value

    console.log(this.facturaForm);
    const produs = {
      gestiune: gestiune.name,
      denumireProdusServiciu: denumireProdusServiciu.denumireProdus,
      um: um.name,
      cantitate,
      pretFaraTva: valoare - valTva,
      valoare: valoare * cantitate,
      valTva: valoare * cantitate * 0.19,
      totalPretFaraTva: (valoare - valTva) * cantitate,
      totalPretCuTva: ((valoare - valTva) * cantitate) + valTva
    }
    console.log("element", produs);
    this.products.push(produs);
    const totalTva = this.products.reduce((a, {valTva}) => a + valTva, 0);
    const totalFaraTva = this.products.reduce((a, {totalPretFaraTva}) => a + totalPretFaraTva, 0);
    const total = totalFaraTva + totalTva;
    // const total = this.products.reduce((a, {totalPretCuTva}) => a + totalPretCuTva, 0);

    this.calcul = {
      totalTva,
      totalFaraTva,
      total
    }

    console.log(this.products);
    this.facturaForm.reset();
  }

  public exportPdf() {
    const arrayWithObjects = [];
    this.products.forEach((product) => {
      arrayWithObjects.push(Object.values(product));
    })

    const doc = new jsPDF()
    console.log(arrayWithObjects)
    autoTable(doc, { columns: this.cols, body: arrayWithObjects})
    doc.save('factura.pdf')
  }

  public ngOnInit(): void {
    this.moneda = this.dateServiciu.returnMoneda();
    this.um = this.dateServiciu.returnUnitateMasura();
    this.termenPlata = this.dateServiciu.returnTermenplata();
    this.gestiune = this.dateServiciu.returnGestiune();
    this.clienti = this.clientiS.returnClienti();
    this.produseServicii = this.produseServiciiS.returnProduseServicii();

    this.cols = [
      {field: "gestiune", header: "Gestiune"},
      {field: "denumireProdusServiciu", header: "Denumire produs/serviciu"},
      {field: "um", header: "U.M."},
      {field: "cantitate", header: "Cant."},
      {field: "pretFaraTva", header: "Pret (fara TVA)"},
      {field: "valoare", header: "Valoare"},
      {field: "valTva", header: "TVA"},
    ]
  }

}

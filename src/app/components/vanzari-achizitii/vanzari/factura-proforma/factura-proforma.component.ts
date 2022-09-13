import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Client, Moneda, ProduseServicii, TermenPlata, Um} from "../../../../interfaces";

// Servicii
import { ReturnDataService } from '../../../../services/return-data.service';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable';
import {ClientiService} from "../../../../services/clienti.service";
import {ProduseServiciiService} from "../../../../services/produse-servicii.service";

@Component({
  selector: 'app-factura-proforma',
  templateUrl: './factura-proforma.component.html',
  styleUrls: ['./factura-proforma.component.scss']
})
export class FacturaProformaComponent implements OnInit {

  public moneda: Moneda[];
  public selectedMoneda: Moneda;
  public termenPlata: TermenPlata[];
  public selectedTermenPlata: TermenPlata;
  public selectedClient: Client;
  public gestiune: any[];
  public selectedGestiune: any;
  public um: Um[];
  public selectedUm: Um;
  public dateValue: Date;
  public products: any[] = [];
  public exportColumns: any[];
  public cols: any[];
  public clienti: Client[];
  public calcul: any;
  public produseServicii: ProduseServicii[];
  public selectedProduseServicii: ProduseServicii;

  public facturaProformaForm: FormGroup = new FormGroup({
    gestiune: new FormControl(''),
    denumireProdusServiciu: new FormControl(''),
    um: new FormControl(''),
    cantitate: new FormControl(''),
    pretFaraTva: new FormControl(''),
    valoare: new FormControl(''),
    valTva: new FormControl('')
  });

  constructor(public dateServiciu: ReturnDataService, public clientiS: ClientiService, public produseServiciiS: ProduseServiciiService) { }

  public onSubmit(){
    const { gestiune, denumireProdusServiciu, um, cantitate, pretFaraTva, valoare, valTva} = this.facturaProformaForm.value

    console.log(this.facturaProformaForm);
    const produs = {
      gestiune: gestiune.name,
      denumireProdusServiciu: denumireProdusServiciu.denumireProdus,
      um: um.name,
      cantitate,
      pretFaraTva: valoare - valTva,
      valoare: valoare * cantitate,
      valTva: valoare * cantitate * 0.19,
    }
    console.log("element", produs);
    this.products.push(produs);

    const totalTva = this.products.reduce((a, {valTva}) => a + valTva, 0);
    const totalFaraTva = this.products.reduce((a, {pretFaraTva}) => a + pretFaraTva, 0);
    const total = this.products.reduce((a, {valoare}) => a + valoare, 0);

    this.calcul = {
      totalTva,
      totalFaraTva,
      total
    }

    console.log(this.products);
    this.facturaProformaForm.reset();
  }

  public exportPdf() {
    const arrayWithObjects = [];
    this.products.forEach((product) => {
      arrayWithObjects.push(Object.values(product));
    })

    const doc = new jsPDF()
    console.log(arrayWithObjects)
    autoTable(doc, { columns: this.cols, body: arrayWithObjects})
    doc.save('factura-proforma.pdf')
  }

  ngOnInit(): void {
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

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Client, Moneda, ProduseServicii, TipProdus} from "../../../../interfaces";

// Servicii
import { ReturnDataService } from '../../../../services/return-data.service';
import { ProduseServiciiService } from '../../../../services/produse-servicii.service';

@Component({
  selector: 'app-produse-servicii',
  templateUrl: './produse-servicii.component.html',
  styleUrls: ['./produse-servicii.component.scss']
})

export class ProduseServiciiComponent implements OnInit {

  public tipProdus: TipProdus[];
  public selectedTipProdus: TipProdus;
  public moneda: Moneda[];
  public selectedMoneda: Moneda;
  public display = false;
  public products: any[];
  public produseServicii: any[];

  public produseServiciiForm: FormGroup = new FormGroup({
    denumireProdus: new FormControl(''),
    tipProdus: new FormControl(''),
    pretStandard: new FormControl(''),
    um: new FormControl(''),
    moneda: new FormControl('')
  });



  constructor(public dateServiciu: ReturnDataService, public  produseServiciiS: ProduseServiciiService) { }

  public showDialog() {
    this.display = true;
  }

  public showForm() {
    console.log(this.produseServiciiForm);
  }

  public onSubmit(){
    const ele = this.produseServiciiForm.value;
    this.products.push(ele);
    this.display = false;
    this.produseServiciiForm.reset();
  }

  // public onDelete(produseServicii: ProduseServicii) {
  //
  //   this.confirmationService.confirm({
  //     message: 'Sunteti sigur ca vreti sa stergeti ' + client1.denumireClient + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       console.log("TEST");
  //       this.clienti = this.clienti.filter(val => val.cif !== client1.cif);
  //       this.client = undefined;
  //       this.messageService.add({severity:'success', summary: 'Succes', detail: 'Clientul a fost sters cu succes', life: 3000});
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.moneda = this.dateServiciu.returnMoneda();
    this.tipProdus = this.dateServiciu.returnTipProdus();
    this.produseServicii = this.produseServiciiS.returnProduseServicii();

    this.products = [];
  }

}

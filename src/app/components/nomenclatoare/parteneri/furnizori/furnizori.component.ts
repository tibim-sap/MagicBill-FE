import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MenuItem} from 'primeng/api';
import {ConfirmationService, MessageService} from "primeng/api";
import { Furnizor, City, Bank } from "../../../../interfaces";
import {ReturnInfoClientiFurnizoriService} from "../../../../services/return-info-clienti-furnizori.service";
import {FurnizoriService} from "../../../../services/furnizori.service";

@Component({
  selector: 'app-furnizori',
  templateUrl: './furnizori.component.html',
  styleUrls: ['./furnizori.component.scss']
})

export class FurnizoriComponent implements OnInit {

  public items: MenuItem[];
  public home: MenuItem;
  public cities: City[];
  public selectedCity: City;
  public banks: Bank[];
  public selectedBank: Bank;
  public showAddDialog = false;
  public submitted: boolean;
  public showEditDialog: boolean;
  public furnizori: Furnizor[];
  public furnizor: Furnizor;

  public furnizoriForm: FormGroup = new FormGroup({
    cif: new FormControl(''),
    denumireFurnizor: new FormControl(''),
    regCom: new FormControl(''),
    codClient: new FormControl(''),
    adresa: new FormControl(''),
    localitate: new FormControl(''),
    judet: new FormControl(''),
    tara: new FormControl(''),
    iban: new FormControl(''),
    banca: new FormControl(''),
    email: new FormControl(''),
    persContact: new FormControl(''),
    telefon: new FormControl('')
  });

  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,
              public dateClientiFurnizori: ReturnInfoClientiFurnizoriService,
              public furnizoriS: FurnizoriService) { }

  public showDialog() {
    this.showAddDialog = true;
  }

  public showForm() {
    console.log(this.furnizoriForm);
  }

  public onSubmit() {
    console.log(this.furnizoriForm.value);
    const ele = this.furnizoriForm.value;
    this.furnizori.push(ele);
    console.log(this.furnizori);
    this.showAddDialog = false;
    this.furnizoriForm.reset();
  }

  public editProduct(product: Furnizor) {
    console.log(product);
    this.showEditDialog = true;
    this.furnizor = {...product};
  }

  public onSave() {
    console.log(this.furnizor)
    this.submitted = true;

    if (this.furnizor.denumireFurnizor.trim()) {
      if (this.furnizor.cif) {
        this.furnizori[this.findIndexById(this.furnizor.cif)] = this.furnizor;
        this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.furnizor.denumireFurnizor} a fost modificat cu succes`, life: 3000});
      }
      else {
        console.log("AICI")
        this.furnizor.cif = this.createId();
        this.furnizori.push(this.furnizor);
        this.messageService.add({severity:'success', summary: 'Successful', detail: `${this.furnizor.denumireFurnizor} a fost modificat cu succes`, life: 3000});
      }

      this.furnizori = [...this.furnizori];
      this.showEditDialog = false;
      this.furnizor = undefined;
      console.log("saved", this.furnizori)
    }
  }

  public findIndexById(id: string): number {
    console.log(id)
    let index = -1;
    for (let i = 0; i < this.furnizori.length; i++) {
      if (this.furnizori[i].cif === id){
        index = i;
        break;
      }
    }
    return index;
  }

  public createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++){
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  public onDelete(furnizorMsg: Furnizor) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + furnizorMsg.denumireFurnizor + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log("TEST");
        this.furnizori = this.furnizori.filter(val => val.cif !== furnizorMsg.cif);
        this.furnizor = undefined;
        this.messageService.add({severity:'success', summary: 'Successful', detail: `${furnizorMsg.denumireFurnizor} a fost sters cu succes`, life: 3000});
      }
    });
  }

  ngOnInit(): void {
    this.banks = this.dateClientiFurnizori.returnBanks();
    this.cities = this.dateClientiFurnizori.returnCities();
    this.furnizori = this.furnizoriS.returnFurnizori();

  }

}

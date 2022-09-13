import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConfirmationService, MessageService} from "primeng/api";
import {City, Bank, Client} from "../../../../interfaces";
import {ServClientiService} from "../../../../serv-clienti.service";

// Servicii
import { ReturnInfoClientiFurnizoriService } from '../../../../services/return-info-clienti-furnizori.service';
import {ClientiService} from "../../../../services/clienti.service";

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})

export class ClientiComponent implements OnInit {

  // public cities: City[];
  // public selectedCity: City;
  // public banks: Bank[];
  // public selectedBank: Bank;
  // public showEditDialog: boolean;
  // public showAddDialog = false;
  // public submitted: boolean;
  // public client: Client;
  // public clienti: Client[];

  // ClientiList:any=[];

  // public clientiForm: FormGroup = new FormGroup({
  //   cif: new FormControl(''),
  //   denumireClient: new FormControl(''),
  //   regCom: new FormControl(''),
  //   codClient: new FormControl(''),
  //   adresa: new FormControl(''),
  //   localitate: new FormControl(''),
  //   judet: new FormControl(''),
  //   tara: new FormControl(''),
  //   iban: new FormControl(''),
  //   banca: new FormControl(''),
  //   email: new FormControl(''),
  //   persContact: new FormControl(''),
  //   telefon: new FormControl('')
  // });

  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,
              public dateClientiFurnizori: ReturnInfoClientiFurnizoriService,
              public clientiS: ClientiService,
              private service:ServClientiService) { }

  // public showDialog() {
  //   this.showAddDialog = true;
  // }
  //
  // public showForm() {
  //   console.log(this.clienti);
  // }
  //
  // public onSubmit() {
  //   console.log(this.clientiForm.value);
  //   const ele = this.clientiForm.value;
  //   this.clienti.push(ele);
  //   console.log(this.clienti);
  //   this.showAddDialog = false;
  //   this.clientiForm.reset();
  // }
  //
  // public editClient(client1: Client) {
  //   console.log(client1.banca);
  //   this.showEditDialog = true;
  //   this.client = {...client1};
  // }
  //
  // public onSave() {
  //   console.log(this.client)
  //   this.submitted = true;
  //
  //   if (this.client.denumireClient.trim()) {
  //     if (this.client.cif) {
  //       this.clienti[this.findIndexById(this.client.cif)] = this.client;
  //       this.messageService.add({severity:'success', summary: 'Succes', detail: `${this.client.denumireClient} a fost modificat cu succes`, life: 3000});
  //     }
  //     else {
  //       console.log("AICI")
  //       this.client.cif = this.createId();
  //       this.clienti.push(this.client);
  //       this.messageService.add({severity:'success', summary: 'Succes', detail: `${this.client.denumireClient} a fost modificat cu succes`, life: 3000});
  //     }
  //
  //     this.clienti = [...this.clienti];
  //     this.showEditDialog = false;
  //     this.client = undefined;
  //     console.log("saved", this.clienti)
  //   }
  // }
  //
  // public findIndexById(id: string): number {
  //   console.log(id)
  //   let index = -1;
  //   for (let i = 0; i < this.clienti.length; i++) {
  //     if (this.clienti[i].cif === id){
  //       index = i;
  //       break;
  //     }
  //   }
  //   return index;
  // }
  //
  // public createId(): string {
  //   let id = '';
  //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++){
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
  //
  // public onDelete(client1: Client) {
  //
  //   this.confirmationService.confirm({
  //     message: 'Sunteti sigur ca vreti sa stergeti ' + client1.denumireClient + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       console.log("TEST");
  //       this.clienti = this.clienti.filter(val => val.cif !== client1.cif);
  //       this.client = undefined;
  //       this.messageService.add({severity:'success', summary: 'Succes', detail: `${client1.denumireClient} a fost sters cu succes`, life: 3000});
  //     }
  //   });
  // }


  ngOnInit(): void {
    // this.banks = this.dateClientiFurnizori.returnBanks();
    // this.cities = this.dateClientiFurnizori.returnCities();
    // this.clienti = this.clientiS.returnClienti();

    // this.refreshClieList();
  }

  // refreshClieList(){
  //   this.service.getClientiList().subscribe(data=>{
  //     this.ClientiList=data;
  //   });
  // }

}

import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {FormControl, FormGroup} from "@angular/forms";
import { City } from "../../../../interfaces";
import {SortEvent} from 'primeng/api';

@Component({
  selector: 'app-gestiuni',
  templateUrl: './gestiuni.component.html',
  styleUrls: ['./gestiuni.component.scss']
})

export class GestiuniComponent implements OnInit {

  public items: MenuItem[];
  public home: MenuItem;
  public cities: City[];
  public selectedCity: City;
  public showEditDialog: boolean;

  public gestiuneForm: FormGroup = new FormGroup({
    denumireGestiune: new FormControl(''),
    tipGestiune: new FormControl(''),
    gestionar: new FormControl(''),
    adresa: new FormControl(''),
    localitate: new FormControl(''),
    judet: new FormControl(''),
    tara: new FormControl(''),
  });

  public displayGestiune = false;
  public products: any[];
  // public product: Product;

  // constructor(private productService: ProductService) { }
  constructor() {
    this.cities = [
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
  }

  // clearFilter(dropdown: Dropdown) {
  //   dropdown.resetFilter();
  // }

  public showDialog() {
    this.displayGestiune = true;
  }

  public showForm() {
    console.log(this.gestiuneForm);
  }

  public onSubmit() {
    console.log(this.gestiuneForm.value);
    const ele = this.gestiuneForm.value;
    this.products.push(ele);
    console.log(this.products);
    this.displayGestiune = false;
    this.gestiuneForm.reset();
  }


  // customSort(event: SortEvent) {
  //   event.data.sort((data1, data2) => {
  //     let value1 = data1[event.field];
  //     let value2 = data2[event.field];
  //     let result = null;
  //
  //     if (value1 == null && value2 != null)
  //       result = -1;
  //     else if (value1 != null && value2 == null)
  //       result = 1;
  //     else if (value1 == null && value2 == null)
  //       result = 0;
  //     else if (typeof value1 === 'string' && typeof value2 === 'string')
  //       result = value1.localeCompare(value2);
  //     else
  //       result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
  //
  //     return (event.order * result);
  //   });
  // }

  // editProduct(product: Product) {
  //   this.product = {...product};
  //   this.productDialog = true;
  // }
  //
  // deleteProduct(product: Product) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.name + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.products = this.products.filter(val => val.id !== product.id);
  //       this.product = {};
  //       this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  //     }
  //   });
  // }

  ngOnInit(): void {
    // this.productService.getProductsSmall().then(data => this.products = data);

    this.products = [];

    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

}

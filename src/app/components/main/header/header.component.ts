import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  // items: MenuItem[];

  itemsBreadcrumb: MenuItem[]
  home: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.itemsBreadcrumb = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.home = {icon: 'pi pi-home', routerLink: '/'};

    // this.items = [
    //   {
    //     label: 'File',
    //     items: [{
    //       label: 'New',
    //       icon: 'pi pi-fw pi-plus',
    //       items: [
    //         {label: 'Project'},
    //         {label: 'Other'},
    //       ]
    //     },
    //       {label: 'Open'},
    //       {label: 'Quit'}
    //     ]
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //       {label: 'Delete', icon: 'pi pi-fw pi-trash'},
    //       {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
    //     ]
    //   }
    // ];
  }
}

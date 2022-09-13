import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'MagicBill';

  public breadcrumb: MenuItem[];

  ngOnInit(): void {
    this.breadcrumb = [
      {label: 'Categories', url: './'},
      {label: 'Sports'},
      {label: 'Football'},
      {label: 'Countries'},
      {label: 'Spain'},
      {label: 'F.C. Barcelona'},
      {label: 'Squad'},
      {label: 'Lionel Messi'}
    ];
  }
}



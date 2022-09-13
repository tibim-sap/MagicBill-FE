import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent implements OnInit {

  public display1 = false;
  public display2 = false;
  public display3 = false;
  public display4 = false;
  public display5 = false;
  public display6 = false;

  constructor(private primengConfig: PrimeNGConfig) { }

  // public showMenu() {
  //   this.display = true;
  // }

  menuItems: MenuItem[];

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }
}

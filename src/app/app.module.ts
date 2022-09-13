import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { SidebarNavigationComponent } from './components/main/sidebar-navigation/sidebar-navigation.component';
import { SidebarModule } from 'primeng/sidebar';
import { FacturaComponent } from './components/vanzari-achizitii/vanzari/factura/factura.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BonFiscalComponent } from './components/vanzari-achizitii/vanzari/bon-fiscal/bon-fiscal.component';
import { FacturaStornoComponent } from './components/vanzari-achizitii/vanzari/factura-storno/factura-storno.component';
import { FacturaProformaComponent } from './components/vanzari-achizitii/vanzari/factura-proforma/factura-proforma.component';
import { NirComponent } from './components/vanzari-achizitii/achizitii/nir/nir.component';
import { ReturFurnizorComponent } from './components/vanzari-achizitii/achizitii/retur-furnizor/retur-furnizor.component';
import { CheltuialaComponent } from './components/vanzari-achizitii/achizitii/cheltuiala/cheltuiala.component';
import { FacturiComponent } from './components/vanzari-achizitii/documente-recurente/facturi/facturi.component';
import { ProformeComponent } from './components/vanzari-achizitii/documente-recurente/proforme/proforme.component';
import { IncasareComponent } from './components/incasari-plati/incasare/incasare.component';
import { PlataFacturaFurnizorComponent } from './components/incasari-plati/plata-factura-furnizor/plata-factura-furnizor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RaportFacturiComponent } from './components/documente-emise/vanzari/raport-facturi/raport-facturi.component';
import { RaportIncasariComponent } from './components/documente-emise/vanzari/raport-incasari/raport-incasari.component';
import { RaportProformeComponent } from './components/documente-emise/vanzari/raport-proforme/raport-proforme.component';
import { RaportDocumenteRecurenteComponent } from './components/documente-emise/vanzari/raport-documente-recurente/raport-documente-recurente.component';
import { RaportDocumenteFurnizoriComponent } from './components/documente-emise/achizitii/raport-documente-furnizori/raport-documente-furnizori.component';
import { RaportReceptiiFurnizoriComponent } from './components/documente-emise/achizitii/raport-receptii-furnizori/raport-receptii-furnizori.component';
import { RaportPlatiComponent } from './components/documente-emise/achizitii/raport-plati/raport-plati.component';
import { RaportBonuriConsumComponent } from './components/documente-emise/tranzactii-pe-stoc/raport-bonuri-consum/raport-bonuri-consum.component';
import { RaportTransferuriComponent } from './components/documente-emise/tranzactii-pe-stoc/raport-transferuri/raport-transferuri.component';
import { RaportModificariPretComponent } from './components/documente-emise/tranzactii-pe-stoc/raport-modificari-pret/raport-modificari-pret.component';
import { RaportAjustariStocComponent } from './components/documente-emise/tranzactii-pe-stoc/raport-ajustari-stoc/raport-ajustari-stoc.component';
import { RaportInventareComponent } from './components/documente-emise/tranzactii-pe-stoc/raport-inventare/raport-inventare.component';
import { ClientiComponent } from './components/nomenclatoare/parteneri/clienti/clienti.component';
import { FurnizoriComponent } from './components/nomenclatoare/parteneri/furnizori/furnizori.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ProduseServiciiComponent } from './components/nomenclatoare/articole/produse-servicii/produse-servicii.component';
import { GestiuniComponent } from './components/nomenclatoare/articole/gestiuni/gestiuni.component';
import { CategoriiCheltuieliComponent } from './components/nomenclatoare/articole/categorii-cheltuieli/categorii-cheltuieli.component';
import { ListaPreturiComponent } from './components/nomenclatoare/preturi/lista-preturi/lista-preturi.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Toast, ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import {InputNumberModule} from 'primeng/inputnumber';
import { InventarComponent } from './components/tranzactii-pe-stoc/inventar/inventar.component';
import { AjustareStocComponent } from './components/tranzactii-pe-stoc/ajustare-stoc/ajustare-stoc.component';
import {ChartModule} from 'primeng/chart';
import { CurrencyPipe, DecimalPipe } from "@angular/common";

import {HttpClientModule} from '@angular/common/http';
import { ServClientiService } from './serv-clienti.service';
import { ShowClientiComponent } from './components/nomenclatoare/parteneri/clienti/show-clienti/show-clienti.component';
import { AddEditClientiComponent } from './components/nomenclatoare/parteneri/clienti/add-edit-clienti/add-edit-clienti.component';
import { AddEditFurnizoriComponent } from './components/nomenclatoare/parteneri/furnizori/add-edit-furnizori/add-edit-furnizori.component';
import { ShowFurnizoriComponent } from './components/nomenclatoare/parteneri/furnizori/show-furnizori/show-furnizori.component';
import { ShowProduseServiciiComponent } from './components/nomenclatoare/articole/produse-servicii/show-produse-servicii/show-produse-servicii.component';
import { AddEditProduseServiciiComponent } from './components/nomenclatoare/articole/produse-servicii/add-edit-produse-servicii/add-edit-produse-servicii.component';
import { AddEditCategoriiCheltuialaComponent } from './components/nomenclatoare/articole/categorii-cheltuieli/add-edit-categorii-cheltuiala/add-edit-categorii-cheltuiala.component';
import { ShowCategoriiCheltuialaComponent } from './components/nomenclatoare/articole/categorii-cheltuieli/show-categorii-cheltuiala/show-categorii-cheltuiala.component';
import { AddEditGestiuniComponent } from './components/nomenclatoare/articole/gestiuni/add-edit-gestiuni/add-edit-gestiuni.component';
import { ShowGestiuniComponent } from './components/nomenclatoare/articole/gestiuni/show-gestiuni/show-gestiuni.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarNavigationComponent,
    FacturaComponent,
    BonFiscalComponent,
    FacturaStornoComponent,
    FacturaProformaComponent,
    NirComponent,
    ReturFurnizorComponent,
    CheltuialaComponent,
    FacturiComponent,
    ProformeComponent,
    IncasareComponent,
    PlataFacturaFurnizorComponent,
    DashboardComponent,
    RaportFacturiComponent,
    RaportIncasariComponent,
    RaportProformeComponent,
    RaportDocumenteRecurenteComponent,
    RaportDocumenteFurnizoriComponent,
    RaportReceptiiFurnizoriComponent,
    RaportPlatiComponent,
    RaportBonuriConsumComponent,
    RaportTransferuriComponent,
    RaportModificariPretComponent,
    RaportAjustariStocComponent,
    RaportInventareComponent,
    ClientiComponent,
    FurnizoriComponent,
    ProduseServiciiComponent,
    GestiuniComponent,
    CategoriiCheltuieliComponent,
    ListaPreturiComponent,
    InventarComponent,
    AjustareStocComponent,
    ShowClientiComponent,
    AddEditClientiComponent,
    AddEditFurnizoriComponent,
    ShowFurnizoriComponent,
    ShowProduseServiciiComponent,
    AddEditProduseServiciiComponent,
    AddEditCategoriiCheltuialaComponent,
    ShowCategoriiCheltuialaComponent,
    AddEditGestiuniComponent,
    ShowGestiuniComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    PanelMenuModule,
    MenubarModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    ButtonModule,
    DropdownModule,
    AppRoutingModule,
    TableModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    RippleModule,
    DividerModule,
    CardModule,
    PanelModule,
    FormsModule,
    CalendarModule,
    ToastModule,
    ConfirmDialogModule,
    InputNumberModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [ServClientiService, ConfirmationService, MessageService, CurrencyPipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

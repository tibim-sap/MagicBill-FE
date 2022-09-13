import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BonFiscalComponent} from './components/vanzari-achizitii/vanzari/bon-fiscal/bon-fiscal.component';
import {FacturaComponent} from './components/vanzari-achizitii/vanzari/factura/factura.component';
import {FacturaProformaComponent} from './components/vanzari-achizitii/vanzari/factura-proforma/factura-proforma.component';
import {FacturaStornoComponent} from './components/vanzari-achizitii/vanzari/factura-storno/factura-storno.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FacturiComponent} from './components/vanzari-achizitii/documente-recurente/facturi/facturi.component';
import {ProformeComponent} from './components/vanzari-achizitii/documente-recurente/proforme/proforme.component';
import {CheltuialaComponent} from './components/vanzari-achizitii/achizitii/cheltuiala/cheltuiala.component';
import {NirComponent} from './components/vanzari-achizitii/achizitii/nir/nir.component';
import {ReturFurnizorComponent} from './components/vanzari-achizitii/achizitii/retur-furnizor/retur-furnizor.component';
import {IncasareComponent} from './components/incasari-plati/incasare/incasare.component';
import {PlataFacturaFurnizorComponent} from './components/incasari-plati/plata-factura-furnizor/plata-factura-furnizor.component';
import {ClientiComponent} from './components/nomenclatoare/parteneri/clienti/clienti.component';
import {RaportProformeComponent} from './components/documente-emise/vanzari/raport-proforme/raport-proforme.component';
import {RaportIncasariComponent} from './components/documente-emise/vanzari/raport-incasari/raport-incasari.component';
import {RaportFacturiComponent} from './components/documente-emise/vanzari/raport-facturi/raport-facturi.component';
import {RaportDocumenteRecurenteComponent} from './components/documente-emise/vanzari/raport-documente-recurente/raport-documente-recurente.component';
import {RaportDocumenteFurnizoriComponent} from './components/documente-emise/achizitii/raport-documente-furnizori/raport-documente-furnizori.component';
import {RaportReceptiiFurnizoriComponent} from './components/documente-emise/achizitii/raport-receptii-furnizori/raport-receptii-furnizori.component';
import {RaportPlatiComponent} from './components/documente-emise/achizitii/raport-plati/raport-plati.component';
import {RaportAjustariStocComponent} from './components/documente-emise/tranzactii-pe-stoc/raport-ajustari-stoc/raport-ajustari-stoc.component';
import {RaportBonuriConsumComponent} from './components/documente-emise/tranzactii-pe-stoc/raport-bonuri-consum/raport-bonuri-consum.component';
import {RaportInventareComponent} from './components/documente-emise/tranzactii-pe-stoc/raport-inventare/raport-inventare.component';
import {RaportModificariPretComponent} from './components/documente-emise/tranzactii-pe-stoc/raport-modificari-pret/raport-modificari-pret.component';
import {RaportTransferuriComponent} from './components/documente-emise/tranzactii-pe-stoc/raport-transferuri/raport-transferuri.component';
import {FurnizoriComponent} from './components/nomenclatoare/parteneri/furnizori/furnizori.component';
import {ListaPreturiComponent} from './components/nomenclatoare/preturi/lista-preturi/lista-preturi.component';
import {ProduseServiciiComponent} from './components/nomenclatoare/articole/produse-servicii/produse-servicii.component';
import {GestiuniComponent} from './components/nomenclatoare/articole/gestiuni/gestiuni.component';
import {CategoriiCheltuieliComponent} from './components/nomenclatoare/articole/categorii-cheltuieli/categorii-cheltuieli.component';
import {AjustareStocComponent} from './components/tranzactii-pe-stoc/ajustare-stoc/ajustare-stoc.component'
import {InventarComponent} from './components/tranzactii-pe-stoc/inventar/inventar.component'

const routes: Routes = [
  {path: 'bon-fiscal', component: BonFiscalComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'factura-proforma', component: FacturaProformaComponent},
  {path: 'factura-storno', component: FacturaStornoComponent},
  {path: 'facturi', component: FacturiComponent},
  {path: 'proforme', component: ProformeComponent},
  {path: 'cheltuieli', component: CheltuialaComponent},
  {path: 'nir', component: NirComponent},
  {path: 'retur-furnizor', component: ReturFurnizorComponent},
  {path: 'incasari-plati', component: IncasareComponent},
  {path: 'plata-factura-furnizor', component: PlataFacturaFurnizorComponent},
  {path: 'raport/facturi', component: RaportFacturiComponent},
  {path: 'raport/incasari', component: RaportIncasariComponent},
  {path: 'raport/proforme', component: RaportProformeComponent},
  {path: 'raport/abonament', component: RaportDocumenteRecurenteComponent},
  {path: 'raport/documente-furnizori', component: RaportDocumenteFurnizoriComponent},
  {path: 'raport/note-intrare-receptie', component: RaportReceptiiFurnizoriComponent},
  {path: 'raport/plati', component: RaportPlatiComponent},
  {path: 'raport/ajustari-de-stoc', component: RaportAjustariStocComponent},
  {path: 'raport/bonuri-cosum', component: RaportBonuriConsumComponent},
  {path: 'raport/inventare', component: RaportInventareComponent},
  {path: 'raport/modificari-de-pret', component: RaportModificariPretComponent},
  {path: 'raport/transferuri', component: RaportTransferuriComponent},
  {path: 'nomenclator/produse-servicii', component: ProduseServiciiComponent},
  {path: 'nomenclator/gestiuni', component: GestiuniComponent},
  {path: 'nomenclator/categorii-cheltuiala', component: CategoriiCheltuieliComponent},
  {path: 'nomenclator/lista-preturi', component: ListaPreturiComponent},
  {path: 'nomenclator/clienti', component: ClientiComponent},
  {path: 'nomenclator/furnizori', component: FurnizoriComponent},
  {path: 'tranzacti-pe-stoc/ajustare-stoc', component: AjustareStocComponent},
  {path: 'tranzacti-pe-stoc/inventar', component: InventarComponent},

  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

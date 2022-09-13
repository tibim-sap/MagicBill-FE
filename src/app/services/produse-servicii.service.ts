import { Injectable } from '@angular/core';
import {ProduseServicii} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProduseServiciiService {

  public produseServicii: ProduseServicii[] = [
    {
      denumireProdus: 'Programe de tranzitii in cariera',
      tipProdus: 'Servicii',
      pretStandard: '500',
      um: 'pret/pers',
      moneda: 'RON'
    },
    {
      denumireProdus: 'Seminarii de schimbare',
      tipProdus: 'Servicii',
      pretStandard: '800',
      um: 'pret/grupa',
      moneda: 'RON'
    },
    {
      denumireProdus: 'Seminar leadership',
      tipProdus: 'Servicii',
      pretStandard: '650',
      um: 'pret/pers',
      moneda: 'RON'
    },
    {
      denumireProdus: 'Coaching: Making Leadership Development Stick',
      tipProdus: 'Produs',
      pretStandard: '150',
      um: 'buc',
      moneda: 'RON'
    },
    {
      denumireProdus: 'The essential guide to creating an honest, ethical workplace culture in any industry',
      tipProdus: 'Produs',
      pretStandard: '150',
      um: 'buc',
      moneda: 'RON'
    },
    {
      denumireProdus: 'What Lies Ahead: Three Fundamental Changes to How We\'ll Work Post-Pandemic',
      tipProdus: 'Produs',
      pretStandard: '170',
      um: 'buc',
      moneda: 'RON'
    }
  ];

  constructor() { }

  public returnProduseServicii() {
    return this.produseServicii;
  }
}

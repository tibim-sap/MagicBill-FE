import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServClientiService {

  readonly APIUrl="http://localhost:58787/api";

  constructor(private http: HttpClient) { }

  //Serviciu Clienti
  getClientiList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Clienti');
  }

  addClienti(val:any){
    return this.http.post(this.APIUrl+'/Clienti',val);
  }

  updateClienti(val:any){
    return this.http.put(this.APIUrl+'/Clienti',val);
  }

  deleteClienti(val:any){
    return this.http.delete(this.APIUrl+'/Clienti/'+val);
  }

  // Serviciu Furnizori
  getFurnizoriList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Furnizori');
  }

  addFurnizori(val:any){
    return this.http.post(this.APIUrl+'/Furnizori',val);
  }

  updateFurnizori(val:any){
    return this.http.put(this.APIUrl+'/Furnizori',val);
  }

  deleteFurnizori(val:any){
    return this.http.delete(this.APIUrl+'/Furnizori/'+val);
  }

//  Serviciu Produse/Servicii
  getProdusServiciuiList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ProduseServicii');
  }

  addProdusServiciu(val:any){
    return this.http.post(this.APIUrl+'/ProduseServicii',val);
  }

  updateProdusServiciu(val:any){
    return this.http.put(this.APIUrl+'/ProduseServicii',val);
  }

  deleteProdusServiciu(val:any){
    return this.http.delete(this.APIUrl+'/ProduseServicii/'+val);
  }

  getAllProduseServiciiNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/ProduseServicii/GetAllProduseServiciiNames');
  }

  //  Serviciu Categorie Cheltuiala
  getCategorieCheltuialaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CategoriiCheltuiala');
  }

  addCategorieCheltuiala(val:any){
    return this.http.post(this.APIUrl+'/CategoriiCheltuiala',val);
  }

  updateCategorieCheltuiala(val:any){
    return this.http.put(this.APIUrl+'/CategoriiCheltuiala',val);
  }

  deleteCategorieCheltuiala(val:any){
    return this.http.delete(this.APIUrl+'/CategoriiCheltuiala/'+val);
  }

  //  Serviciu Gestiune
  getGestiuneList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Gestiune');
  }

  addGestiune(val:any){
    return this.http.post(this.APIUrl+'/Gestiune',val);
  }

  updateGestiune(val:any){
    return this.http.put(this.APIUrl+'/Gestiune',val);
  }

  deleteGestiune(val:any){
    return this.http.delete(this.APIUrl+'/Gestiune/'+val);
  }

}

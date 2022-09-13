import {Component, Input, OnInit} from '@angular/core';
import {ServClientiService} from "../../../../../serv-clienti.service";

@Component({
  selector: 'app-add-edit-gestiuni',
  templateUrl: './add-edit-gestiuni.component.html',
  styleUrls: ['./add-edit-gestiuni.component.css']
})
export class AddEditGestiuniComponent implements OnInit {

  constructor(private service:ServClientiService) { }

  @Input() gest:any;
  gestiuneId: string;
  denumireGestiune: string;
  tipGestiune: string;
  gestionar: string;
  adresa: string;
  localitate: string;
  judet: string;
  tara: string;

  ngOnInit(): void {
    this.gestiuneId =  this.gest.gestiuneId;
    this.denumireGestiune = this.gest.denumireGestiune;
    this.tipGestiune = this.gest.tipGestiune;
    this.gestionar = this.gest.gestionar;
    this.adresa = this.gest.adresa;
    this.localitate = this.gest.localitate;
    this.judet = this.gest.judet;
    this.tara = this.gest.tara;
  }

  addGestiune(){
    var val = {
      gestiuneId: this.gestiuneId,
      denumireGestiune: this.denumireGestiune,
      tipGestiune: this.tipGestiune,
      gestionar: this.gestionar,
      adresa: this.adresa,
      localitate: this.localitate,
      judet: this.judet,
      tara: this.tara
    };
    this.service.addGestiune(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateGestiune(){
    var val = {
      gestiuneId:this.gestiuneId,
      denumireGestiune: this.denumireGestiune,
      tipGestiune: this.tipGestiune,
      gestionar: this.gestionar,
      adresa: this.adresa,
      localitate: this.localitate,
      judet: this.judet,
      tara: this.tara
    };
    this.service.updateGestiune(val).subscribe(res=>{
      alert(res.toString())
    })
  }

}

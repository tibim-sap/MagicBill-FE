import { Component, OnInit } from '@angular/core';
import {TipDocument} from "../../../interfaces";
import {FormControl, FormGroup} from "@angular/forms";

// Servicii
import { ReturnDataService } from '../../../services/return-data.service';


@Component({
  selector: 'app-incasare',
  templateUrl: './incasare.component.html',
  styleUrls: ['./incasare.component.scss']
})
export class IncasareComponent implements OnInit {

  public tipDocument: TipDocument[];
  public selectedTipDocument: TipDocument;

  public incasareForm: FormGroup = new FormGroup({
    tipDocument: new FormControl(''),
  });

  constructor(public dateIncasare: ReturnDataService) { }

  ngOnInit(): void {
    this.tipDocument = this.dateIncasare.returnTipDocument();
  }

}

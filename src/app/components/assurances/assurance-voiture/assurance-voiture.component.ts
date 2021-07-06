import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-assurance-voiture',
  templateUrl: './assurance-voiture.component.html',
  styleUrls: ['./assurance-voiture.component.css']
})
export class AssuranceVoitureComponent implements OnInit {
voitureForm!: FormGroup;
formBuilder: any;

  constructor() { }

  ngOnInit(): void {  this.voitureForm = this.formBuilder.group({
    NomAssurance:['', Validators.required],
    catégorie: ['', Validators.required],
    Dommages_aux_biens:['', Validators.required],
    Responsabilité_civile:['', Validators.required],
    Assistance_domiciliaire:['', Validators.required],

  });
  }

  onSubmit() {



       }


}

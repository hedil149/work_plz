import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assurance-maison',
  templateUrl: './assurance-maison.component.html',
  styleUrls: ['./assurance-maison.component.css']
})
export class AssuranceMaisonComponent implements OnInit {

  maisonForm!: FormGroup;
   formBuilder: any;

  constructor() { }

  ngOnInit(): void {  this.maisonForm = this.formBuilder.group({
    NomAssurance:['', Validators.required],
    catégorie: ['', Validators.required],
    Formule_Access:['', Validators.required],
    Formule_Optimale:['', Validators.required],
    Assistance_domiciliaire:['', Validators.required],

  });
  }
  onSubmit() {



  }

}

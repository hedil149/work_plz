import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assurance-prevoyance',
  templateUrl: './assurance-prevoyance.component.html',
  styleUrls: ['./assurance-prevoyance.component.css']
})
export class AssurancePrevoyanceComponent implements OnInit {

  prevoyanceForm!: FormGroup;
formBuilder: any;

  constructor() { }

  ngOnInit(): void {  this.prevoyanceForm = this.formBuilder.group({
    NomAssurance:['', Validators.required],
    catégorie: ['', Validators.required],
    Garantie:['', Validators.required],


  });
  }

}

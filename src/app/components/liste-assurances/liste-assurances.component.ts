import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-liste-assurances',
  templateUrl: './liste-assurances.component.html',
  styleUrls: ['./liste-assurances.component.css']
})
export class ListeAssurancesComponent implements OnInit {

 form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService, ) { }
  pieceDidenditeList: string[] = ['CIN', 'Carte De Séjour', 'Passeport'];
  AGenreList: string[] = ['Tourisme', 'Camionette', 'Camion', 'Remorque'];
  EnergieList: string[] = ['Essence', 'Gasoil'];
   UsageVehiculeList: string[] = ['Promenade et Affaires(y compris 2 routes)', 'transport public des marchandises', 'Agricole', 'transport public des marchandises', 'Location des voitures(y compris 2 routes', 'Auto-école'];
  TransportPublicVoyageursList: string[] = ['Taxis', 'Louages', 'T.P.V rual', 'Engine de chantier'];
  pieceDidendite!: FormGroup;

  //checkbox
checked = false;
indeterminate = false;
labelPosition: 'before' | 'after' = 'after';
disabled = false;
submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      UsageVehicule: ['', Validators.required],
    numeroContrat: ['', Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50)],
     nomPrenomContractant: ['', Validators.required],
     adresse: ['', Validators.required],
     ville: ['', Validators.required],
     Energie: ['', Validators.required],

    codePostal: ['', Validators.required],
    ProfessionActivite: ['', Validators.required],
      pieceDidenditeN: ['', Validators.required],
      RegistreDeCommerce: ['', Validators.required],
      permisDeConduireN: ['', Validators.required],
      delivreLe: ['', Validators.required],
      a: ['', Validators.required],
      neLe: ['', Validators.required],
      AGenre: ['', Validators.required],
      Autres: ['', Validators.required],
      Marque: ['', Validators.required],
      Type: ['', Validators.required],
      nSerie: ['', Validators.required],
      Autress: ['', Validators.required],
      pMiseEnCirculation: ['', Validators.required],
      nImmatriculation: ['', Validators.required],
      chargeUtile: ['', Validators.required],
      PTC: ['', Validators.required],
      puissance: ['', Validators.required],
      nombrePlace: ['', Validators.required],
      poidsVide: ['', Validators.required],
      valeurMarchande: ['', Validators.required],
      valeurAneuf: ['', Validators.required],
      Autresss: ['', Validators.required],
      Duree: ['', Validators.required],
      TransportPublicVoyageurs: ['', Validators.required],
      Autressss: ['', Validators.required],
      natureProduit: ['', Validators.required],
      volVehicule: ['', Validators.required],
      incendit: ['', Validators.required],
      dommagesVehicules: ['', Validators.required],
      dommagesCollisions: ['', Validators.required],
      ExtensionDommages: ['', Validators.required],
      ExtensionGarantie: ['', Validators.required],
     Franchise: ['', Validators.required],

      assuranceBris: ['', Validators.required],
      limiteGaranties: ['', Validators.required],
       assurancesAutoRadio: ['', Validators.required],
      limiteGarantiesII: ['', Validators.required],
      assurancePersonnes: ['', Validators.required],
      nombre: ['', Validators.required],
      capital: ['', Validators.required],
      GarantiesSpecial: ['', Validators.required],
      GarantiesAssistanceEtranger: ['', Validators.required],
      GarantiesAssistanceTunisie: ['', Validators.required],
      Autresssss: ['', Validators.required],
      dernierCompagineGarantie: ['', Validators.required],
      numeroContract: ['', Validators.required],
      nombreAccidentsDernierAnnes: ['', Validators.required],
      nombreSinistreEngages: ['', Validators.required],
      dernierCoefBMalus: ['', Validators.required],
     AutresContrataupresDeLloyd: ['', Validators.required],

      lequel: ['', Validators.required],
      Le: ['', Validators.required],


    });
  }
  onSubmit() {

    this.userservice.insert_Form(this.form.getRawValue()).subscribe(data=>{
      this.router.navigate(['/payment']);

    })}

      onReset() {
        this.submitted = false;
        this.form.reset();
    }
}

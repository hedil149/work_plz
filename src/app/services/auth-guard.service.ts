import { Injectable } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {


  constructor(private Localstorage: LocalStorageService,private router: Router) { }
  canActivate() : boolean {
    if (this.Localstorage.retrieve('user') == "logged"){
      return true;
    }

alert("non autorisé | Not authorized");
this.router.navigate(['/login']);
  return false;


  }






}

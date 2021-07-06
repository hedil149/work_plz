import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/UserModel';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
// import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ;

  user : User = new User (
    "",
    "",
     "","",
     "","",
     145876,
     "",
)
  constructor(private _snackBar: MatSnackBar,  private router: Router, private userervice:UserService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.userervice.loadProfile(this.user.getRawValue()).subscribe(data=>{
      this.router.navigate(['/profile']);


     })

}}

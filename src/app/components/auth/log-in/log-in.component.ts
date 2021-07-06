import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage'; //juste partie mel module
import {  auth_response } from '../../../models/auth.response';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['../styles.css']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  isloggedIn: Boolean= false;
  auth_response!: auth_response;

  constructor(private formBuilder: FormBuilder, private router: Router, private authservice : AuthService, private  LocalStorageService :  LocalStorageService  ) { }


  ngOnInit(): void {  this.loginForm = this.formBuilder.group({
    Email: ['', Validators.required],
    password: ['', Validators.required]
  });
  }
  get data() { return this.loginForm.controls; }



  onSubmit() {
      this.authservice.loginUser(this.loginForm.getRawValue()).subscribe(data=>{
            this.auth_response=data;
            console.log(this.auth_response)

        this.router.navigate(['/home']);


         })

   }


}


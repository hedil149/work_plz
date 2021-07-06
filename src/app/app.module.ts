import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuardService  as Authgard}  from './services/auth-guard.service';
import { ChartsModule } from 'ng2-charts';
import { ListeAssurancesComponent } from './components/liste-assurances/liste-assurances.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AssuranceVoitureComponent } from './components/assurance-voiture/assurance-voiture.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    EditProfileComponent,
    AdminComponent,
    UsersListComponent,
    ListeAssurancesComponent,
    AssuranceVoitureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     AngularMaterialModule,
     FlexLayoutModule,
     FormsModule,
     ScrollToModule.forRoot(),
     ReactiveFormsModule,
     InputsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    ChartsModule,
    NgbModule,
  ],
  providers:[ Authgard],
  exports: [RouterModule],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

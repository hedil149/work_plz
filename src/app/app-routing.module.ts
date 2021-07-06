import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {AdminComponent} from './components/admin/admin.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuardService as Authgard, AuthGuardService  } from './services/auth-guard.service';
import { ListeAssurancesComponent } from './components/liste-assurances/liste-assurances.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'editprofile', component: EditProfileComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'assurancelist', component: ListeAssurancesComponent},
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

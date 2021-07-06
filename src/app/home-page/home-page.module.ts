import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceComponent } from './service/service.component';
import { HomePageComponent } from './home-page.component';
import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark, Coffee, Award,
  UserPlus, MapPin, Mail, Phone
} from 'angular-feather/icons';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomePageRoutingModule } from './home-page.routing';

const icons = {
  Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark,
  UserPlus, Coffee, Award, MapPin, Mail, Phone
};


@NgModule({
  declarations: [
    ClientComponent,
    FooterComponent,
    FeaturesComponent,
    ServiceComponent,
    HomePageComponent,
    ScrollspyDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    CarouselModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    HomePageRoutingModule
  ],
  exports:[ScrollspyDirective]
})
export class HomePageModule { }

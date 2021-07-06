import { Component, OnInit } from '@angular/core';
import { Testimonial } from './clients.model';
import { testimonialData } from './data';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  testimonialData: Testimonial[] = [];

  constructor() { }

  testimonialOptions: OwlOptions = {
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
    },
    nav: true,
    navText: ['<i class=\'mdi mdi-chevron-left\'></i>', '<i class=\'mdi mdi-chevron-right\'></i>'],
  };

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.testimonialData = testimonialData;
  }

}

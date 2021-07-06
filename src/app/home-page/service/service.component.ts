import { Component, OnInit } from '@angular/core';
import { Services} from './services.model';
import { serviceData } from './data';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serviceData: Services[] = [];

  constructor() { }

  ngOnInit(): void {
    // fetches the data
    this._fetchData();
  }

  /**
   * Service data
   */
  private _fetchData() {
    this.serviceData = serviceData;
  }

}

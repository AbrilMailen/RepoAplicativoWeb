import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.css'],
})
export class ApiConnectionComponent implements OnInit {
  constructor(private service: ApiService) {}

  datosBuenosAires:any;
  datosMontevideo:any;
  datosNY:any;
  datosLondon:any;

  ngOnInit(): void {
      this.service.getWeather('Buenos Aires').subscribe(json => this.datosBuenosAires=json);
      this.service.getWeather('New York').subscribe(json => this.datosNY=json);
      this.service.getWeather('London').subscribe(json => this.datosLondon=json);
      this.service.getWeather('Montevideo').subscribe(json => this.datosMontevideo=json);
  }
}

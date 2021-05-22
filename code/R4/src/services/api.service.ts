import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    getWeather(city:string){
     return this.http.get(environment.urlApi+"&query="+city)
    }
  
}

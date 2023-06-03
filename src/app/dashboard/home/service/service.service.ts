import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get('https://agenciasenlinea.aviatur.com/aviatur/cities.json');
  }

  getContent(): Observable<any> {
    return this.http.get('https://agenciasenlinea.aviatur.com/aviatur/content.json');
  }
}

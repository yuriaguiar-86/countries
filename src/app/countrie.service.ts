import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrieService {

  private url: string = environment.api;

  constructor( private http: HttpClient ) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(this.url + '/all').pipe();
  }

  getCountrySpecific(name: string): Observable<any> {
    return this.http.get<any>(this.url + '/name/' + name).pipe();
  }
}

import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../countrie.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  countries: any;

  constructor( private service: CountrieService ) { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe(
      success => {
        this.countries = success
      }
    );
  }
}

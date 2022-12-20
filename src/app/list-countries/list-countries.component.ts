import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../countrie.service';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  public countries: any;
  private filterCountries: any;

  constructor( private service: CountrieService ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.service.getAllCountries().subscribe(
      success => {
        this.filterCountries = success;
        this.countries = this.filterCountries;
      }
    );
  }

  filterCountry(value: string) {
    this.searchCountry(value);
  }

  public searchCountry(value: string) {
    const filter = this.filterCountries.filter((res: any) => {
      return !res.name.common.indexOf(value[0].toUpperCase() + value.substring(1));
    });

    this.countries = filter;
  }
}

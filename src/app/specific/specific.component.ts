import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountrieService } from '../countrie.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  name: any;
  country: any;

  constructor( private service: CountrieService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.service.getCountrySpecific(this.name).subscribe(
        success => {
          this.country = success[0];
        }
      );
    });
  }
}

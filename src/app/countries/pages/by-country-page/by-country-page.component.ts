import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchInputValue(value: string) {
    this.countriesService.searchCountry(value)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries;
      });
  }

}

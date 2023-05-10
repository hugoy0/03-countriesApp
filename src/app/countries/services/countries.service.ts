import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable({providedIn: 'root'})

export class CountriesService {

    private countryApi:string = 'https://restcountries.com/v3.1/';

    constructor(private http: HttpClient) { }

    searcCapital(term: string): Observable<Country[]> {
        const url = `${this.countryApi}/capital/${term}`;
        return this.http.get<Country[]>(url);
    }

}

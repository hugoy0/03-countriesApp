import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable({providedIn: 'root'})

export class CountriesService {

    private countryApi:string = 'https://restcountries.com/v3.1/';

    constructor(private http: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.countryApi}/capital/${term}`;

        return this.http.get<Country[]>(url)
            .pipe(
                catchError( ({error}) => {
                    console.error(error);
                    return of ([])
                } ),
            );
    }

    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.countryApi}/region/${region}`;

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(({err}) => {
                    return of ([])
                }),
            );
    }

    searchCountry(country: string): Observable<Country[]> {
        const url = `${this.countryApi}/name/${country}`;

        return this.http.get<Country[]>(url)
            .pipe(
                catchError(({err}) => {
                    return of ([])
                }),
            );
    }

}


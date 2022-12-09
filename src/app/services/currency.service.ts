import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private currencyUrl = "https://api.exchangerate.host/";
  constructor(private http: HttpClient) { }

  public getRates(baseCurrencyCode: string) {
    return this.http.get<any>(`${this.currencyUrl}lates?base=${baseCurrencyCode}`);
  }

  public convertCurrency(fromCurrencyCode: string, toCurrencyCode: string) {
    return this.http.get<any>(`${this.currencyUrl}convert?from=${fromCurrencyCode}&to=${toCurrencyCode}`);
  }
}

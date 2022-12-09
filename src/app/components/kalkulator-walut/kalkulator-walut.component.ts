import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-kalkulator-walut',
  templateUrl: './kalkulator-walut.component.html',
  styleUrls: ['./kalkulator-walut.component.scss']
})
export class KalkulatorWalutComponent {
  public amountMoney: number = 0;
  public fromCurrency: string = "PLN";
  public toCurrency: string = "USD";
  public exchangeRate: string = "";
  public result: string = "";

  constructor(private currencyService: CurrencyService) {

  }

  public calculate() {
    console.log(this.fromCurrency)
  }

  public convertCurrency() {
    this.currencyService.convertCurrency(this.fromCurrency, this.toCurrency).subscribe(response => {
      let total = this.amountMoney * response.result
      this.exchangeRate = `1 ${this.fromCurrency} = ${response.result} ${this.toCurrency}`
      if (this.toCurrency == "BTC") {
        this.result = `${this.amountMoney} ${this.fromCurrency} = ${total} ${this.toCurrency}`
      } else {
        this.result = `${this.amountMoney} ${this.fromCurrency} = ${total.toFixed(2)} ${this.toCurrency}`
      }
    });
  }
}

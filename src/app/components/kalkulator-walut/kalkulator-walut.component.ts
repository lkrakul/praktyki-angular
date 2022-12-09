import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-kalkulator-walut',
  templateUrl: './kalkulator-walut.component.html',
  styleUrls: ['./kalkulator-walut.component.scss']
})
export class KalkulatorWalutComponent {
  constructor(private currencyService: CurrencyService) {
    this.currencyService.convertCurrency("GBP", "PLN").subscribe(response => {
      console.log(response.result);
    });
  }
}

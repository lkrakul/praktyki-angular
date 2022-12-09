import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KalkulatorBmiComponent } from './components/kalkulator-bmi/kalkulator-bmi.component';
import { KalkulatorWalutComponent } from './components/kalkulator-walut/kalkulator-walut.component';

@NgModule({
  declarations: [
    AppComponent,
    KalkulatorBmiComponent,
    KalkulatorWalutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

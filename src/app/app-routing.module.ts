import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalkulatorBmiComponent } from './components/kalkulator-bmi/kalkulator-bmi.component';
import { KalkulatorWalutComponent } from './components/kalkulator-walut/kalkulator-walut.component';

const routes: Routes = [
  { path: 'kalkulator-bmi', component: KalkulatorBmiComponent },
  { path: 'kalkulator-walut', component: KalkulatorWalutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

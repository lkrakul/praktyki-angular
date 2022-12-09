import { Component } from "@angular/core";

@Component({
    selector: 'app-kalkulator-bmi',
    templateUrl: './kalkulator-bmi.component.html',
    styleUrls: ['kalkulator-bmi.component.scss']
})
export class KalkulatorBmiComponent {
    public showResults: boolean = false;
    public resultText: string = "";
    public resultNumber: string = "";
    public weight: number = 0;
    public height: number = 0;
    public bmi: number = 0;

    public checkWeightAndHeight(): void {
        if (this.weight > 0 && this.height > 0) {
            this.calculateBMI();
        }
    }

    public calculateBMI(): void {
        this.showResults = true;
        this.bmi = (this.weight / (this.height * this.height))*10000;
        this.resultNumber = this.bmi.toFixed(2);
        this.setBMIDescription();
    }

    public setBMIDescription(): void {
        if (this.bmi < 16) {
            this.resultText = "Wygłodzenie";
        } else if (this.bmi < 17) {
            this.resultText = "Wychudzenie";
        } else if (this.bmi < 18.5) {
            this.resultText = "Niedowaga";
        } else if (this.bmi < 25) {
            this.resultText = "Optimum";
        } else if (this.bmi < 30) {
            this.resultText = "Nadwaga";
        } else if (this.bmi < 35) {
            this.resultText = "Otyłość I st.";
        } else if (this.bmi < 40) {
            this.resultText = "Otyłość II st.";
        } else if (this.bmi >= 40) {
            this.resultText = "Otyłość III st.";
        }
    }

    public resetValuesInputs(): void {
        this.showResults = false;
        this.weight = 0;
        this.height = 0;
    }

}
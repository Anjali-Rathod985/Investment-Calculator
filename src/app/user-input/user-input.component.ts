import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredIntialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enterdExpectedRetrun = signal('5');
  enterdDuration = signal('10');

  constructor(private investmentService: InvestmentService) { }

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({

      initialInvestment: +this.enteredIntialInvestment(),
      duration: +this.enterdDuration(),
      expectedReturn: +this.enterdExpectedRetrun(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredIntialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enterdDuration.set('10');
  }

}

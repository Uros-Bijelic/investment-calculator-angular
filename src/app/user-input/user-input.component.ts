import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentData } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(0);
  duration = signal(0);

  calculateResult = output<InvestmentData>();

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });

    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(0);
    this.duration.set(0);
  }
}

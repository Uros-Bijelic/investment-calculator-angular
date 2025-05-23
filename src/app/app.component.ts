import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import type { InvestmentResult } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    InvestmentResultsComponent,
  ],
})
export class AppComponent {
  investmentResults = signal<InvestmentResult[] | undefined>(undefined);
  // investmentResults?: InvestmentResult[];
}

import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../investment-input.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) investmentResuts?: InvestmentResult[];
}

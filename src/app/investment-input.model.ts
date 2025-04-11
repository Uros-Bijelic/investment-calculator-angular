export type InvestmentData = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

export type InvestmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

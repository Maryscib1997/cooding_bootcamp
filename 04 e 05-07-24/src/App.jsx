import React, { useState } from 'react';
import MortgageInput from './MortgageInput';
import MortgageResults from './MortgageResults';

const App = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [calculationType, setCalculationType] = useState('interest');
  const [totalInterest, setTotalInterest] = useState(null);
  const [annualInterest, setAnnualInterest] = useState(null);
  const [totalMortgage, setTotalMortgage] = useState(null);
  const [annualMortgagePayment, setAnnualMortgagePayment] = useState(null);

  const handleLoanAmountChange = (value) => setLoanAmount(parseFloat(value) || 0);
  const handleLoanTermChange = (value) => setLoanTerm(parseFloat(value) || 0);
  const handleInterestRateChange = (value) => setInterestRate(parseFloat(value) || 0);
  const handleCalculationTypeChange = (value) => setCalculationType(value);

  const calculateMortgage = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfPayments = loanTerm * 12;

    if (calculationType === 'interest') {
      const totalInterest = loanAmount * monthlyInterestRate * numberOfPayments;
      const annualInterest = totalInterest / loanTerm;
      setTotalInterest(totalInterest);
      setAnnualInterest(annualInterest);
    } else if (calculationType === 'total') {
      const monthlyPayment = loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);
      const totalMortgage = monthlyPayment * numberOfPayments;
      const annualMortgagePayment = monthlyPayment * 12;
      setTotalMortgage(totalMortgage);
      setAnnualMortgagePayment(annualMortgagePayment);
    }
  };

  return (
    <div className="app">
      <h1>Calcolatore di Rimborso Mutuo</h1>
      <MortgageInput
        onLoanAmountChange={handleLoanAmountChange}
        onLoanTermChange={handleLoanTermChange}
        onInterestRateChange={handleInterestRateChange}
        onCalculationTypeChange={handleCalculationTypeChange}
        loanAmount={loanAmount}
        loanTerm={loanTerm}
        interestRate={interestRate}
        calculationType={calculationType}
      />
      <button onClick={calculateMortgage}>Calcola</button>
      <MortgageResults
        totalInterest={totalInterest}
        annualInterest={annualInterest}
        totalMortgage={totalMortgage}
        annualMortgagePayment={annualMortgagePayment}
      />
    </div>
  );
};

export default App;

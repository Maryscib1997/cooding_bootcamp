import React, { useState } from 'react';

const MortgageInput = ({
  onLoanAmountChange,
  onLoanTermChange,
  onInterestRateChange,
  onCalculationTypeChange,
  loanAmount,
  loanTerm,
  interestRate,
  calculationType,
}) => {
  return (
    <div className="mortgage-input">
      <div className="input-group">
        <label htmlFor="loanAmount">Importo del mutuo:</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => onLoanAmountChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="loanTerm">Durata del mutuo (anni):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => onLoanTermChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="interestRate">Tasso di interesse (%)</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => onInterestRateChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="calculationType">Tipo di calcolo:</label>
        <select id="calculationType" value={calculationType} onChange={(e) => onCalculationTypeChange(e.target.value)}>
          <option value="interest">Solo interessi</option>
          <option value="total">Mutuo totale</option>
        </select>
      </div>
    </div>
  );
};

export default MortgageInput;

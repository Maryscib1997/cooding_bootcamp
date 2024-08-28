import React from 'react';

const MortgageResults = ({ totalInterest, annualInterest, totalMortgage, annualMortgagePayment }) => {
  return (
    <div className="mortgage-results">
      {totalInterest !== null && (
        <div className="result-item">
          <p>Interessi totali:</p>
          <span>{totalInterest.toFixed(2)} €</span>
        </div>
      )}
      {annualInterest !== null && (
        <div className="result-item">
          <p>Rata annuale interessi:</p>
          <span>{annualInterest.toFixed(2)} €</span>
        </div>
      )}
      {totalMortgage !== null && (
        <div className="result-item">
          <p>Mutuo totale (interessi compresi):</p>
          <span>{totalMortgage.toFixed(2)} €</span>
        </div>
      )}
      {annualMortgagePayment !== null && (
        <div className="result-item">
          <p>Rata annuale mutuo:</p>
          <span>{annualMortgagePayment.toFixed(2)} €</span>
        </div>
      )}
    </div>
  );
};

export default MortgageResults;



function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  
  

  // The tax one  pay as you earn 
  let paye;
  if (grossSalary <= 24000) {
      paye = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
      paye = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
      paye = grossSalary * 0.3;
  } else if (grossSalary <= 800000) {
      paye = grossSalary * 0.325;
  } else {
      paye = grossSalary * 0.35;
  }

  // NHIF Deduction Calculation according to earnings
  let nhif;
  if (grossSalary <= 5999) {
      nhif = 150;
  } else if (grossSalary <= 7999) {
      nhif = 300;
  } else if (grossSalary <= 11999) {
      nhif = 400;
  } else if (grossSalary <= 14999) {
      nhif = 500;
  } else if (grossSalary <= 19999) {
      nhif = 600;
  } else if (grossSalary <= 24999) {
      nhif = 750;
  } else if (grossSalary <= 29999) {
      nhif = 850;
  } else if (grossSalary <= 34999) {
      nhif = 900;
  } else if (grossSalary <= 39999) {
      nhif = 950;
  } else if (grossSalary <= 44999) {
      nhif = 1000;
  } else if (grossSalary <= 49999) {
      nhif = 1100;
  } else if (grossSalary <= 59999) {
      nhif = 1200;
  } else if (grossSalary <= 69999) {
      nhif = 1300;
  } else if (grossSalary <= 79999) {
      nhif = 1400;
  } else if (grossSalary <= 89999) {
      nhif = 1500;
  } else if (grossSalary <= 99999) {
      nhif = 1600;
  } else {
      nhif = 1700;
  }

  // NSSF Deduction Calculation
  let nssf;
  let tier1Limit = 7000;
  let tier2Limit = 36000;
  let tier1Contribution = 0;
  let tier2Contribution = 0;

  // Tier 1 Contribution
  if (grossSalary <= tier1Limit) {
      tier1Contribution = grossSalary * 0.06;
  } else {
      tier1Contribution = tier1Limit * 0.06;
  }

  // Tier 2 Contribution
  if (grossSalary > tier1Limit) {
      if (grossSalary <= tier2Limit) {
          tier2Contribution = (grossSalary - tier1Limit) * 0.06;
      } else {
          tier2Contribution = (tier2Limit - tier1Limit) * 0.06;
      }
  }

  // Total NSSF Contribution
  nssf = tier1Contribution + tier2Contribution;

  // Total Deductions
  const totalDeductions = paye + nhif + nssf;

  // Net Salary
  const netSalary = grossSalary - totalDeductions;

  // Output Results of all the deductions and the salary one recieves
  console.log(`Gross Salary: Ksh ${grossSalary}`);
  console.log(`PAYE Deduction: Ksh ${paye}`);
  console.log(`NHIF Deduction: Ksh ${nhif}`);
  console.log(`NSSF Deduction: Ksh ${nssf}`);
  console.log(`Total Deductions: Ksh ${totalDeductions}`);
  console.log(`Net Salary: Ksh ${netSalary}`);
}

// execute your  salary here !!!
 calculateNetSalary(300000,1000000);
//

	

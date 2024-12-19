
// NET SALARY CALCULATOR
function netSalaryCalculator(basicSalary, benefits) {
    console.log(`Basic salary: ${basicSalary}, Benefits: ${benefits}`); // Log input values for debugging

    // Validate the input values
    if (typeof basicSalary !== "number" || typeof benefits !== "number" || basicSalary < 0 || benefits < 0) {
        console.log("Invalid salary or benefits input detected");
        return "Invalid input. Please enter non-negative numbers for salary and benefits.";
    }

    const grossSalary = basicSalary + benefits; // Calculate the gross salary
    console.log(`Gross salary calculated: ${grossSalary}`); // Debug gross salary

    // Calculate PAYE (tax) based on gross salary brackets
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = grossSalary * 0.25;
    } else {
        paye = grossSalary * 0.3;
    }
    console.log(`PAYE calculated: ${paye}`); // Debug PAYE

    // Calculate NHIF deductions based on gross salary brackets
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
    console.log(`NHIF calculated: ${nhif}`); // Debug NHIF

    // Calculate NSSF deductions (capped at 6% of gross salary or 1800)
    const nssf = Math.min(grossSalary * 0.06, 1800);
    console.log(`NSSF calculated: ${nssf}`); // Debug NSSF

    // Calculate total deductions
    const deductions = paye + nhif + nssf;
    console.log(`Total deductions calculated: ${deductions}`); // Debug total deductions

    // Calculate net salary
    const netSalary = grossSalary - deductions;
    console.log(`Net salary calculated: ${netSalary}`); // Debug net salary

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}

// Example usage
const salaryDetails = netSalaryCalculator(50000, 10000);
console.log(salaryDetails);

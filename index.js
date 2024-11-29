function gradeGenerator() {
    const marks = prompt("Enter the student's marks (0 - 100):");
    const score = parseInt(marks);

    if (score < 0 || score > 100 || isNaN(score)) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    } else if (score > 79) {
        console.log("Grade: A");
    } else if (score >= 60) {
        console.log("Grade: B");
    } else if (score >= 49) {
        console.log("Grade: C");
    } else if (score >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

gradeGenerator();





     function speedDetector() {
        const speed = prompt("Enter the speed of the car:");
        const limit = 70;
        const kmPerPoint = 5;
    
        if (speed <= limit) {
            console.log("Ok");
        } else {
            const points = Math.floor((speed - limit) / kmPerPoint);
            if (points > 12) {
                console.log("License suspended");
            } else {
                console.log('Points: ${points');
            }
        }
    }
    
    speedDetector();


    
    function netSalaryCalculator() {
        const basicSalary = parseFloat(prompt("Enter your basic salary:"));
        const benefits = parseFloat(prompt("Enter your benefits:"));
    
        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Invalid input. Please enter numeric values.");
            return;
        }
    
        const grossSalary = basicSalary + benefits;
    
        // Tax calculation based on KRA rates
        let tax = 0;
        if (grossSalary <= 24000) tax = grossSalary * 0.1;
        else if (grossSalary <= 32333) tax = grossSalary * 0.25;
        else tax = grossSalary * 0.3;
    
        // NHIF deduction
        const nhifRates = [
            { min: 0, max: 5999, deduction: 150 },
            { min: 6000, max: 7999, deduction: 300 },
            { min: 8000, max: 11999, deduction: 400 },
            { min: 12000, max: 14999, deduction: 500 },
            { min: 15000, max: 19999, deduction: 600 },
            { min: 20000, max: 24999, deduction: 750 },
            { min: 25000, max: 29999, deduction: 850 },
            { min: 30000, max: 34999, deduction: 900 },
            { min: 35000, max: 39999, deduction: 950 },
            { min: 40000, max: Infinity, deduction: 1000 }
        ];
        const nhifDeduction = nhifRates.find(rate => grossSalary >= rate.min && grossSalary <= rate.max).deduction;
    
        // NSSF deduction
        const nssfDeduction = Math.min(grossSalary * 0.06, 1800);
    
        const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
    
        console.log('Gross Salary: ${grossSalary}');
        console.log('Tax: ${tax}');
        console.log('NHIF Deduction: ${nhifDeduction}');
        console.log('NSSF Deduction: ${nssfDeduction}');
        console.log('Net Salary: ${netSalary}');
    }
    
    netSalaryCalculator();

        

        




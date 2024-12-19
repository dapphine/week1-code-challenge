// GRADE GENERATOR
function generateGrade(marks) {
    console.log(`Input marks: ${marks}`); // Log the input marks for debugging

    // Check if the input is valid (a number between 0 and 100)
    if (typeof marks !== "number" || marks > 100 || marks < 0) {
        console.log("Invalid input detected");
        return "Invalid marks. Please enter a number between 0 and 100.";
    }

    // Assign a grade based on the marks
    if (marks > 79) {
        console.log("Grade assigned: A");
        return "Grade: A";
    } else if (marks >= 60) {
        console.log("Grade assigned: B");
        return "Grade: B";
    } else if (marks >= 49) {
        console.log("Grade assigned: C");
        return "Grade: C";
    } else if (marks >= 40) {
        console.log("Grade assigned: D");
        return "Grade: D";
    } else {
        console.log("Grade assigned: E");
        return "Grade: E";
    }
}

// Example usage
console.log(generateGrade(85)); // Outputs: Grade: A

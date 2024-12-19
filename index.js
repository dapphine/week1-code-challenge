
function gradeGenerator(marks) {
  // Validate input: ensure it's a number between 0 and 100
  if (typeof marks !== "number" || marks < 0 || marks > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
      return; // Exit the function if the input is invalid
  }

  // Determine the grade based on the marks
  if (marks > 79) {
      console.log("Grade: A");
  } else if (marks >= 60) {
      console.log("Grade: B");
  } else if (marks >= 49) {
      console.log("Grade: C");
  } else if (marks >= 40) {
      console.log("Grade: D");
  } else {
      console.log("Grade: E");
  }
}

// Test cases
gradeGenerator(50);  // Grade: C
gradeGenerator(-0.9); // Invalid input. Please enter a number between 0 and 100.
gradeGenerator(85);   // Grade: A
gradeGenerator(39);   // Grade: E

	

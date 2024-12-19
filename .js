// SPEED DETECTOR
function speedDetector(speed) {
    console.log(`Input speed: ${speed}`); // Log the input speed for debugging

    // Check if the speed input is valid
    if (typeof speed !== "number" || speed < 0) {
        console.log("Invalid speed input detected");
        return "Invalid speed. Please enter a non-negative number.";
    }

    const speedLimit = 70; // Define the speed limit
    const kmPerDemerit = 5; // Define the km/h above limit per demerit point
    console.log(`Speed limit: ${speedLimit}, Km per demerit: ${kmPerDemerit}`); // Debug constants

    // Check if the speed is within the limit
    if (speed <= speedLimit) {
        console.log("Speed is within limit: Ok");
        return "Ok";
    } else {
        // Calculate demerit points for exceeding the limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        console.log(`Calculated demerit points: ${demeritPoints}`); // Debug demerit points

        // Determine the result based on demerit points
        const result = demeritPoints > 12 ? "License suspended" : `Points: ${demeritPoints}`;
        console.log(`Result: ${result}`);
        return result;
    }
}

// Example usage
console.log(speedDetector(85)); // Outputs: Points: 3

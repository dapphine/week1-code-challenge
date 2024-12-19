
function motionAnalyzer(speed) { 
    const motionLimit = 70; // The speed limit for drivers.
    const distancePerPoint = 5; // Points are awarded for every 5 km/h over the limit.

    if (speed <= motionLimit) { 
        // If speed is within the limit, output "Ok".
        console.log("Ok");
    } else { 
        // Calculate points for exceeding the speed limit.
       
        let points = Math.floor((speed - motionLimit) / distancePerPoint); // Calculate points for exceeding the speed limit.

        if (points > 12) { 
            // If points exceed 12, license is suspended.
            console.log("License suspended");
        } else {
            // Otherwise, display the points.
            console.log(`Points: ${points}`);
        }
    }
}

// Test cases
motionAnalyzer(80); // Test case 1: Speed = 80
motionAnalyzer(80);  // Test case 1: Speed = 80
motionAnalyzer(350); // Test case 2: Speed = 350

 
	

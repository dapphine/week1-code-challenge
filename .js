function speedDetector() {
    const speed = prompt"Enter the speed of the car:";
    const limit = 70;
    const kmPerPoint = 5;
    if (speed <= limit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - limit) / kmPerPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log'Points: ${points';
        }
    }
}
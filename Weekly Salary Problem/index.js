function calculateSalary(hour, day) {
    const isWeekend = [6, 7].includes(day);
    // Hourly rate 
        // First 8 hours: 10$/hour
        const normalRate = 10;
        // Overtime: 14$/hour
        const overtimeRate = 15;
        let salary = 0;

    // Weekend rate
        // Double/2X
        if (hour <= 8) {
            salary = hour * normalRate
        } else {
            salary = 8 * normalRate + (hour - 8) * overtimeRate
        }

        return isWeekend ? salary * 2 : salary
}

function weeklySalary(hours) {
    return hours.reduce((total, current, index) => total + calculateSalary(current, index + 1), 0)
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]) === 400)
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]) === 410)
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]) === 280)
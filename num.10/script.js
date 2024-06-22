function calculateSalary() {
    const level = document.getElementById('level').value;
    const hours = parseFloat(document.getElementById('hours').value);

    if (level === "") {
        document.getElementById('result').innerText = "Please select the teacher's level.";
        return;
    }

    if (isNaN(hours) || hours <= 0) {
        document.getElementById('result').innerText = "Please enter a valid number of hours per week.";
        return;
    }

    let hourlyRate;
    switch (level) {
        case "1":
            hourlyRate = 12.00;
            break;
        case "2":
            hourlyRate = 17.00;
            break;
        case "3":
            hourlyRate = 25.00;
            break;
        default:
            document.getElementById('result').innerText = "Invalid level selected.";
            return;
    }

    const weeklySalary = hourlyRate * hours;
    const monthlySalary = weeklySalary * 4.5;

    const result = `The monthly salary is $${monthlySalary.toFixed(2)}.`;
    document.getElementById('result').innerText = result;
}
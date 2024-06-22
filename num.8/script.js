function calculateIdealWeight() {
    const height = parseFloat(document.getElementById('height').value);
    const sex = document.getElementById('sex').value;

    if (isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = "Please enter a valid height.";
        return;
    }

    if (sex === "") {
        document.getElementById('result').innerText = "Please select your sex.";
        return;
    }

    let idealWeight;
    if (sex === "male") {
        idealWeight = (72.7 * height) - 58;
    } else if (sex === "female") {
        idealWeight = (62.1 * height) - 44.7;
    }

    const result = `Your ideal weight is ${idealWeight.toFixed(2)} kg.`;
    document.getElementById('result').innerText = result;
}
function calculatePayment() {
    const price = parseFloat(document.getElementById('price').value);
    const paymentCondition = document.getElementById('paymentCondition').value;

    if (isNaN(price) || price <= 0) {
        document.getElementById('result').innerText = "Please enter a valid product price.";
        return;
    }

    if (paymentCondition === "") {
        document.getElementById('result').innerText = "Please select a payment condition.";
        return;
    }

    let finalPrice;
    switch (paymentCondition) {
        case "a":
            finalPrice = price * 0.9;
            break;
        case "b":
            finalPrice = price * 0.85;
            break;
        case "c":
            finalPrice = price;
            break;
        case "d":
            finalPrice = price * 1.1;
            break;
        default:
            document.getElementById('result').innerText = "Invalid payment condition.";
            return;
    }

    const result = `The amount to be paid is $${finalPrice.toFixed(2)}.`;
    document.getElementById('result').innerText = result;
}
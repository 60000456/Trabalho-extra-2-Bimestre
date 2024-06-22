function calculateCredit() {
    const balance = parseFloat(document.getElementById('balance').value);
    let credit = 0;

    if (balance >= 0 && balance <= 200) {
        credit = 0;
    } else if (balance > 200 && balance <= 400) {
        credit = balance * 0.2;
    } else if (balance > 400 && balance <= 600) {
        credit = balance * 0.3;
    } else if (balance > 600) {
        credit = balance * 0.4;
    }

    const result = `Your average balance is $${balance.toFixed(2)}. You are eligible for a credit of $${credit.toFixed(2)}.`;
    document.getElementById('result').innerText = result;
}
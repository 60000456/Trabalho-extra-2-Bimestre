function calculateTotal() {
    const itemCode = parseInt(document.getElementById('itemCode').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    const menu = {
        100: { item: "Hot Dog", price: 2.50 },
        101: { item: "Cheeseburger", price: 3.00 },
        102: { item: "Fries", price: 2.00 },
        103: { item: "Soda", price: 1.50 },
        104: { item: "Milkshake", price: 3.50 }
    };

    if (menu[itemCode]) {
        const item = menu[itemCode];
        const total = item.price * quantity;
        const result = `You ordered ${quantity} ${item.item}(s). Total to be paid: $${total.toFixed(2)}.`;
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "Invalid item code. Please enter a valid code from the menu.";
    }
}
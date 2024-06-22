document.addEventListener('DOMContentLoaded', function() {
    const initialMoney = 250000000000;
    let remainingMoney = initialMoney;
    const items = [
        { name: "Cup of Coffee", price: 5 },
        { name: "Book", price: 20 },
        { name: "Smartphone", price: 999 },
        { name: "Car", price: 30000 },
        { name: "House", price: 500000 },
        { name: "Yacht", price: 10000000 },
        { name: "Private Jet", price: 50000000 },
        { name: "Skyscraper", price: 1500000000 },
        { name: "Football Team", price: 2000000000 }
    ];

    const moneyRemainingElement = document.getElementById('money-remaining');
    const itemsElement = document.getElementById('items');
    const cartItemsElement = document.getElementById('cart-items');
    const totalSpentElement = document.getElementById('total-spent');

    function updateMoneyRemaining() {
        moneyRemainingElement.textContent = `$${remainingMoney.toLocaleString()}`;
    }

    function updateTotalSpent(totalSpent) {
        totalSpentElement.textContent = `Total Spent: $${totalSpent.toLocaleString()}`;
    }

    function addItemToCart(item) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toLocaleString()}`;
        cartItemsElement.appendChild(cartItem);
    }

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-card';
        
        const itemName = document.createElement('h4');
        itemName.textContent = item.name;
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price.toLocaleString()}`;
        
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            if (remainingMoney >= item.price) {
                remainingMoney -= item.price;
                addItemToCart(item);
                updateMoneyRemaining();
                updateTotalSpent(initialMoney - remainingMoney);
            } else {
                alert("You don't have enough money to buy this item.");
            }
        });

        itemElement.appendChild(itemName);
        itemElement.appendChild(itemPrice);
        itemElement.appendChild(buyButton);
        itemsElement.appendChild(itemElement);
    });

    updateMoneyRemaining();
});

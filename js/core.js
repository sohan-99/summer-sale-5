document.addEventListener('DOMContentLoaded', function () {
    const selectedCards = []; // Array to store selected cards

    function updateSelectedCards() {
        let totalAmount = 0;

        const cardCounts = {}; // Object to track card quantities
        let discount = 0
        for (const card of selectedCards) {
            totalAmount += card.price * card.quantity;
            console.log(totalAmount);
            cardCounts[card.name] = cardCounts[card.name] ? cardCounts[card.name] + 1 : 1;

            total = totalAmount

            console.log(total);
            if (totalAmount >= 200) {
                total = totalAmount - (totalAmount * 20 / 100)
                discount = (totalAmount * 20 / 100)

            }
            else {
                discount = 0
            }


        }

        const textArea1 = document.getElementById('textArea1');
        textArea1.innerHTML = ''; // Clear the list before updating

        for (const [index, card] of selectedCards.entries()) {
            const cardLine = document.createElement('div');

            cardLine.innerText = `${index + 1}. ${card.name} x${card.quantity}`;
            textArea1.appendChild(cardLine);
        }

        const selectedProductCount = selectedCards.length; // Count of selected products
        const productCountDisplay = document.createElement('div');
        productCountDisplay.innerText = `Total selected products: ${selectedProductCount}`;
        textArea1.appendChild(productCountDisplay);

        const textArea2 = document.getElementById('textArea2');
        textArea2.innerText = ` ${totalAmount.toFixed(2)}TK`;
        const textArea3 = document.getElementById('textArea3');
        textArea3.innerText = ` ${discount.toFixed(2)}TK`;
        const textArea4 = document.getElementById('textArea4');
        textArea4.innerText = ` ${total.toFixed(2)}TK`;
    }

    function cardClickHandler(cardElement, cardPrice, cardText) {



        const cardName = cardText.innerText;
        const cardPriceAmount = parseFloat(cardPrice.innerText);

        const existingCard = selectedCards.find(card => card.name === cardName);

        if (existingCard) {
            existingCard.quantity++;
        } else {
            selectedCards.push({ name: cardName, price: cardPriceAmount, quantity: 1 });
        }

        updateSelectedCards();
        butttonDisable()
    }
    // card 1
    document.getElementById('card1').addEventListener('click', function () {
        const card1Prise = document.getElementById('s1c1');
        const card1item = document.getElementById('s1c1t');
        cardClickHandler(this, card1Prise, card1item);
    });
    // card -2 
    document.getElementById('card2').addEventListener('click', function () {
        const card2prise = document.getElementById('s1c2');
        const card2item = document.getElementById('s1c2t');
        cardClickHandler(this, card2prise, card2item);
    });
    // card-3
    document.getElementById('card3').addEventListener('click', function () {
        const card3prise = document.getElementById('s1c3');
        const card3item = document.getElementById('s1c3t');
        cardClickHandler(this, card3prise, card3item);
    });
    // card-4
    document.getElementById('card4').addEventListener('click', function () {
        const card4prise = document.getElementById('s2c4');
        const card4item = document.getElementById('s2c4t');
        cardClickHandler(this, card4prise, card4item);
    });

    // card-5
    document.getElementById('card5').addEventListener('click', function () {
        const card5prise = document.getElementById('s2c5');
        const card5item = document.getElementById('s2c5t');
        cardClickHandler(this, card5prise, card5item);
    });
    // card-6
    document.getElementById('card6').addEventListener('click', function () {
        const card6prise = document.getElementById('s2c6');
        const card6item = document.getElementById('s2c6t');
        cardClickHandler(this, card6prise, card6item);
    });
    // card-7
    document.getElementById('card7').addEventListener('click', function () {
        const card7prise = document.getElementById('s3c7');
        const card7item = document.getElementById('s3c7t');
        cardClickHandler(this, card7prise, card7item);
    });
    // card-8
    document.getElementById('card8').addEventListener('click', function () {
        const card8prise = document.getElementById('s3c8');
        const card8item = document.getElementById('s3c8t');
        cardClickHandler(this, card8prise, card8item);
    });
    // card-9
    document.getElementById('card9').addEventListener('click', function () {
        const card9prise = document.getElementById('s3c9');
        const card9item = document.getElementById('s3c9t');
        cardClickHandler(this, card9prise, card9item);
    });
});

// document.getElementById('purchase-btn').document.addEventListener('click', function () {
// // console.log('clicked');
// const buttonvalue = document.getElementById('textArea4')
// var inputValue = buttonvalue.innerText;
// var buttonman = parseFloat(inputValue)
// var button = document.getElementById('purchase-btn');

// if (inputValue >= 200) {
//     button.disabled = false;

// } else {
//     button.disabled = true;
// }
// })
function butttonDisable() {
    const button = document.getElementById('purchase-btn')
    const buttonvalue = document.getElementById('textArea2')
    var inputValue = buttonvalue.innerText || 0;
    var buttonman = parseFloat(inputValue)
    // console.log(buttonman);
    if (buttonman > 0) {
        button.disabled = false;

    } else {
        button.disabled = true;
    }

}
butttonDisable()
document.addEventListener('DOMContentLoaded', function () {
    const selectedCards = []; // Array to store selected cards

    function updateSelectedCards() {
        let totalAmount = 0;

        const cardCounts = {}; // Object to track card quantities

        for (const card of selectedCards) {
            totalAmount += card.price * card.quantity;
            
            cardCounts[card.name] = cardCounts[card.name] ? cardCounts[card.name] + 1 : 1;
            discount =(totalAmount * 20/100)
            total =totalAmount-(totalAmount * 20/100)


        }

        const textArea1 = document.getElementById('textArea1');
        textArea1.innerHTML = ''; // Clear the list before updating

        for (const card of selectedCards) {
            const cardLine = document.createElement('div');

            cardLine.innerText = `${card.name} x${card.quantity}`;
            textArea1.appendChild(cardLine);
        }

        const textArea2 = document.getElementById('textArea2');
        textArea2.innerText = ` ${totalAmount}TK`;
        const textArea3 = document.getElementById('textArea3');
        textArea3.innerText = ` ${discount}TK`;
        const textArea4 = document.getElementById('textArea4');
        textArea4.innerText = ` ${total}TK`;
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

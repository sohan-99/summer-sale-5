document.getElementById('card1').addEventListener('click', function(){
    // console.log('card 1 clicked');
    const card1Prise = document.getElementById('s1c1')
    const card1PriseAmount = card1Prise.innerText
    // console.log(card1PriseAmount);
   
    //
    const card1item = document.getElementById('s1c1t')
    const card1text = card1item.innerText
    
    // console.log(card1text);
    // set 1
    const textArea = document.getElementById('textArea1')
    const textSpace1 = textArea.innerText
    textArea.innerText = card1text
   
    // set2 
    const textAarea = document.getElementById('textArea2')
    const textSpace2 = textAarea.innerText
    textAarea.innerText = card1PriseAmount
    
})
//card-2
document.getElementById('card2').addEventListener('click', function(){
    const card2prise =document.getElementById('s1c2')
    const card2PriseAmount =card2prise.innerText
    //
    const card2item = document.getElementById('s1c2t')
    const card2text = card2item.innerText
    // set 
    const textAreac2 = document.getElementById('textArea1')
    const textspacec2 = textAreac2.innerText
    textAreac2.innerText = card2text
    // set 
    const textAareac2 = document.getElementById('textArea2')
    const textspace2c2 = textAareac2.innerText
    textAareac2.innerText = card2PriseAmount

})
document.getElementById('card3').addEventListener('click', function(){
    const card3prise =document.getElementById('s1c3')
    const card3PriseAmount =card3prise.innerText
    //
    const card3item = document.getElementById('s1c3t')
    const card3text = card3item.innerText
    // set 
    const textAreac3 = document.getElementById('textArea1')
    const textspacec3 = textAreac3.innerText
    textAreac3.innerText = card3text
    // set 
    const textAareac3 = document.getElementById('textArea2')
    const textspace2c3 = textAareac3.innerText
    textAareac3.innerText = card3PriseAmount

})



// function titleGet(){
//     const title = getInputCard('s1c1t')
//     console.log(title);
// }

// // get input 
// function getInputCard(fildId){
// const inputCardValue =document.getElementById(fildId)
// const Card1text =  inputCardValue.innerText
// return Card1text
// }
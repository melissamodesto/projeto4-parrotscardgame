/* window.prompt('Com quantas cartas você quer jogar?'); */

const img1 = 'bobrossparrot.gif';
const img2 = 'explodyparrot.gif';
const img3 = 'fiestaparrot.gif';
const img4 = 'metalparrot.gif';
const img5 = 'revertitparrot.gif';
const img6 = 'tripletsparrot.gif';
const img7 = 'unicornparrot.gif';


const cardsArray = [img1, img2, img3, img4, img5, img6, img7];

/* const form = document.querySelector('.number-cards');

form.addEventListener('submit', handleSubmit) */

function escolherQuantidade() {
    
    let usuarioEscolhe = true;
    
    while (usuarioEscolhe) {
        
        let amountCards = window.prompt('Com quantas cartas você quer jogar?');
        amountCards = Number(amountCards);

        if (amountCards % 2 === 0 && amountCards <= 14 && amountCards >= 4) {
           
            usuarioEscolhe = false;
            showCards(amountCards);

        } else {
            alert('Você digitou um valor inválido, tente novamente!');
        }
    } 
}

function showCards(number) {

    let newArray = [];

    for (let i = 0; i < number/2; i++) {
        newArray.push(cardsArray[i]);
    }

    newArray = newArray.concat(newArray);
    newArray.sort(comparador);

    const container = document.querySelector('.container');

    for (let i = 0; i < number; i++) {
        
        let cardsTemplate = ` 
        <div class="card" onclick=" flipCard(this)" data-card = "${newArray[i]}">  
            <img class="front-face" src="./image/front.png" alt="front-face" />
            <img class="back-face escondido" src="./image/${newArray[i]}" alt="back-face" /> 
        </div>`;
        container.innerHTML += cardsTemplate;
    }
}

function comparador() {
    return 0.5 - Math.random();
}

escolherQuantidade();

function clickImage() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', flipCard);
    });
}

let cardOne, cardTwo;

function flipCard(element) {

    element.classList.add('rotaded');

    receiveCards(element);

    const frontFace = element.querySelector('.front-face');
    frontFace.classList.add('escondido');

    const backFace = element.querySelector('.back-face');
    backFace.classList.remove('escondido');
}

/* const cards = document.querySelectorAll('.card');
console.log(cards); */


function receiveCards(element) {

    if(cardOne === undefined) {
        
        cardOne = (element);
        return false;

    } else if (cardTwo === undefined) {
    
        cardTwo = (element);
        return false;

    }

    while (cardOne !== cardTwo) {
        cardOne.classList.add('rotaded');
        cardTwo.classList.add('rotaded');

        const frontFace = element.querySelector('.front-face');
        frontFace.classList.remove('escondido');

        const backFace = element.querySelector('.back-face');
        backFace.classList.add('escondido');
    }

    checkCards();
}

function checkCards() {
 
    let isMatch = cardOne.dataset.card === cardTwo.dataset.card;

    if (isMatch) {
        cardOne.classList.add('disabled');
        cardTwo.classList.add('disabled');
    } 

    receiveCards();

    console.log(isMatch);
   
}

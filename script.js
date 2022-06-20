const img1 = 'bobrossparrot.gif';
const img2 = 'explodyparrot.gif';
const img3 = 'fiestaparrot.gif';
const img4 = 'metalparrot.gif';
const img5 = 'revertitparrot.gif';
const img6 = 'tripletsparrot.gif';
const img7 = 'unicornparrot.gif';


const cardsArray = [img1, img2, img3, img4, img5, img6, img7];
let amountCards = 0;

function escolherQuantidade() {

    let usuarioEscolhe = true;

    while (usuarioEscolhe) {

        amountCards = window.prompt('Com quantas cartas você quer jogar?');
        amountCards = Number(amountCards);

        if (amountCards % 2 === 0 && amountCards <= 14 && amountCards >= 4) {

            usuarioEscolhe = false;
            generateCards(amountCards);

        } else {
            alert('Você digitou um valor inválido, tente novamente!');
        }
    }
}

escolherQuantidade();

function generateCards(number) {

    let newArray = [];

    for (let i = 0; i < number / 2; i++) {
        newArray.push(cardsArray[i]);
    }

    newArray = newArray.concat(newArray);
    newArray.sort(comparador);

    const container = document.querySelector('.container');

    for (let i = 0; i < number; i++) {

        let cardsTemplate = ` 
        <div class="card" onclick="flipCard(this)" data-carta = "${newArray[i]}">  
            <img class="front-face" src="./image/front.png" alt="front-face" />
            <img class="back-face escondido" src="./image/${newArray[i]}" alt="back-face" /> 
        </div>`;
        container.innerHTML += cardsTemplate;
    }
}

function comparador() {
    return 0.5 - Math.random();
}

function showCard() {
    frontFace.classList.add('escondido');
    backFace.classList.remove('escondido');

}

let cardOne, cardTwo;
let frontFace, backFace;
let count = 0;

function flipCard(element) {

    if (document.querySelectorAll('.rotaded').length < 2) {
        element.classList.add('rotaded');
        frontFace = element.querySelector('.front-face');
        backFace = element.querySelector('.back-face');


        showCard();

        setTimeout(() => compareCards(element), 1000);

    }
}

function compareCards(element) {

    if (cardOne === undefined) {

        cardOne = (element);

        count++;
        console.log('oi');

        return false;

    } else if (cardTwo === undefined) {

        cardTwo = (element);

        count++;
        console.log('hello');

        frontFace = element.querySelector('.front-face');
        backFace = element.querySelector('.back-face');



        if (cardOne.innerHTML !== cardTwo.innerHTML) {
            notMatch();
            return;

        } else {
            isMatch();
        }
    }
}


function notMatch() {

    cardOne.classList.remove('rotaded');
    cardTwo.classList.remove('rotaded');

    frontFace.classList.remove('escondido');
    backFace.classList.add('escondido');

    cardOne.querySelector('.front-face').classList.remove('escondido');
    cardOne.querySelector('.back-face').classList.add('escondido');

    cardOne = undefined;
    cardTwo = undefined;
}

function isMatch() {
    if (cardOne.innerHTML === cardTwo.innerHTML) {
        cardOne.classList.add('disabled');
        cardTwo.classList.add('disabled');
        cardOne.classList.remove('rotaded');
        cardTwo.classList.remove('rotaded');
        cardOne = undefined;
        cardTwo = undefined;
        console.log(count);
        congrats();
    }
}


function congrats() {

    let pair = document.querySelectorAll('.disabled');

    if (pair.length === amountCards) {
        let messager = document.querySelector('.container');

        messager.innerHTML = `
        <div class="congrats">
        <div>
            <p>Você ganhou em ${count} jogadas!</p>
        </div>
        </div>
        <div class="play-again">
        <p>Você quer jogar novamente?</p>
        <div class="button">
            <div onclick="window.location.reload()">SIM</div>
            <div onclick="window.close()">NÃO</div>
        </div>
        </div>`;
    }
}

/* window.prompt('Com quantas cartas você quer jogar?'); */

function selecionar(elemento) {

    elemento.classList.remove
}

function escolherQuantidade() {
    const qtdCards = document.querySelector('.qtd-cards').innerHTML;

    const jogo = document.querySelector('.container');

    console.log(qtdCards);

    if (qtdCards !== 0) {
        if (qtdCards % 2 === 0) {
            jogo.classList.remove('escondido');
    }
}  

}

function numeroPar() {
    let numero = document.querySelector('.qtd-cards').value;

    if(numero/2 !== 0) {

      alert("Impar");

    } else {


    }
    alert(numero);
}

function numeroCards() {
    const numero = document.querySelector('input').value;
    
    for(i = 0; i <= numero; i++) {

       cards.push()
       document.querySelector("input").value = "";

    }


}

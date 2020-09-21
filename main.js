const boardDimension = 4;


const scoreElement = document.querySelector('.score');
const boardContainer = document.querySelector('.board__container');

const cardList = [
    {
        name: "pink"
    },
    {
        name: "yellow"
    },
    {
        name: "blue"
    },
    {
        name: "red"
    },
    {
        name: "grey"
    },
    {
        name: "purple"
    },
    {
        name: "orange"
    },
    {
        name: "green"
    }
];
const usedCardList = [];
const cardBin = [];


function pickCardFromList () {
    const list = [...cardList]
    const listLength = list.length;
    const randomNumber = Math.floor(Math.random() * (listLength));
    const randomCard = list[randomNumber];
    list.splice(randomNumber, 1);
    return randomCard;
}

function shuffleCardList () {
    
}



function createBoard () {
    for (let i = 0; i < boardDimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        boardContainer.appendChild(row);

        for (let i = 0; i < boardDimension; i++) {
            let field = document.createElement("div");
            field.setAttribute("data-color", cardList[i].name);
            field.className = "card color-hidden";
            field.classList.add(cardList[i].name)
            row.appendChild(field);
            pickCardFromList();
        } 

    }
}
createBoard();






let clickedCard = null;
let score = 0;
function renderScore() {
    scoreElement.innerText = `Score: ${score}`;
}
renderScore();
function onCardClicked(e) {
    const target = e.currentTarget;

    if(target === clickedCard || target.className.includes('done')) {
        return;
    }

    target.classList.remove('color-hidden');
    target.classList.add('done');

    
    console.log(target.getAttribute('data-color'));

 if (!clickedCard) {
    target.className = target.className
        .replace('color-hidden', '')
    clickedCard = target;
 } else if (clickedCard) {

    console.log(clickedCard);
    console.log(target);

     if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
         console.log('trafiles');
         clickedCard = null;
         score += 10;
         renderScore();

     }
     else {
         score += -5;
         renderScore();
         setTimeout(function() {
            clickedCard.classList.add('color-hidden');
            target.classList.add('color-hidden');
            clickedCard.classList.remove('done');
            target.classList.remove('done');
            clickedCard = null;
         }, 1200);
     }

 }
}

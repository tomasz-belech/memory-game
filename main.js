const scoreElement = document.querySelector('.score');
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

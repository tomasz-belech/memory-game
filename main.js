
let clickedCard = null;

function onCardClicked(e) {
    const target = e.currentTarget;

    if(target === clickedCard || target.className.includes('done')) {
        return;
    }

    target.className = target.className
    .replace('color-hidden', '')
    .trim();
    target.className += ' done';

    console.log(target.getAttribute('data-color'));

 if (!clickedCard) {
    target.className = target.className
        .replace('color-hidden', '')
        .trim();
    clickedCard = target;
 } else if (clickedCard) {

     if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
     }

 }
}

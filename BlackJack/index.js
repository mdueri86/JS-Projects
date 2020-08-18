

document.querySelector('#hit-btn').addEventListener('click',blackjackHit);
document.querySelector('#stand-btn').addEventListener('click',blackjackStand);
document.querySelector('#deal-btn').addEventListener('click',blackjackDeal);

const hitSound = new Audio('swish.nda');

function blackjackHit()
{
    //alert("Hit Clicked");
    let cardImage = document.createElement("img");
    cardImage.src = "scissors.png";
    document.querySelector('#your-card').appendChild(cardImage);
    hitSound.play();
}

function blackjackStand()
{
    alert("Stand Clicked");
}

function blackjackDeal()
{
    alert("Deal Clicked");
}
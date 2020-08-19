

document.querySelector('#hit-btn').addEventListener('click',blackjackHit);
document.querySelector('#stand-btn').addEventListener('click',blackjackStand);
document.querySelector('#deal-btn').addEventListener('click',blackjackDeal);

//const hitSound = new Audio('swish.nda');

// change text
document.querySelector("#challenge5").textContent = "Black Jack Challenge";
document.querySelector("#challenge5").style.color = '#FF0000';


function blackjackHit()
{
    //alert("Hit Clicked");
    let cardImage = document.createElement("img");
    cardImage.src = "scissors.png";
    document.querySelector('#your-card').appendChild(cardImage);
    //hitSound.play();
}

function blackjackStand()
{
    alert("Stand Clicked");
}

function blackjackDeal()
{
    
    let images = document.querySelector('#your-box').querySelectorAll('img');
    for (let x=0;x<images.length;x++)
    {
       images[x].remove();
    }
}
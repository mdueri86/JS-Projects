

function rpsGame(yourChoice){
    console.log("Your Choice: ",yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = RpsBotChoice();
    console.log("Bot Choice: ",botChoice);
    result = decideWinner(humanChoice,botChoice);
    console.log("Result is: ",result);
    let message = finalMessage(result[0]);
    console.log("Message: ",message);
    RpsFront(humanChoice,botChoice,message);

}

function decideWinner(humanChoice,botChoice){
    let database = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'scissors':0.5,'rock':0, 'paper':1},
    }

    let yourScore = database[humanChoice][botChoice];
    let botScore = database[botChoice][humanChoice];
    return [yourScore,botScore];
}

function finalMessage(yourScore){
    console.log(yourScore);
    if (yourScore == 0){
        return {
            'message':'You lost!', 
            'color':'red'
        }
    } else if (yourScore == 0.5){
        return {
            'message':'You tied!',
            'color':'brown'
        }
    } else 
        return {
            'message':'You won!',
            'color':'green'
        }
}

function RpsFront(humanChoice,botChoice,message){
    let imageDB = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
        }

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
        
        let humanDiv = document.createElement('div');
        let botDiv = document.createElement('div');
        let messageDiv = document.createElement('div');

        // write the inner html for the div you just created above
        humanDiv.innerHTML = "<img src='"+imageDB[humanChoice]+"' width='150' height='150' style='box-shadow; 8px 10px 50px rgba(37,46,233,5)'>";
        messageDiv.innerHTML = "<h1 style='color:"+message.color+"'>"+message.message+"</h1>";
        botDiv.innerHTML = "<img src='"+imageDB[botChoice]+"' width='150' height='150' style='box-shadow; 8px 10px 50px rgba(233,0,0,5)'>";

        // now append the humanDiv to the flexbox
        document.getElementById('flex-box-1').appendChild(humanDiv);
        document.getElementById('flex-box-1').appendChild(messageDiv);
        document.getElementById('flex-box-1').appendChild(botDiv);
}

function RpsBotChoice(){
    return ['rock','paper','scissors'][Math.floor(Math.random()*3)];
}

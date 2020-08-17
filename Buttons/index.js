



let all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

let copyAllButtonsClasses = [];
for (let i=0; i<all_buttons.length;i++)
{
    copyAllButtonsClasses.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtonsClasses);
console.log(copyAllButtonsClasses[1]);

function buttonColorChange(buttonThingy){
    console.log(buttonThingy.value);
    if (buttonThingy.value == 'red')
    {
        buttonsRed();
    }
    else if (buttonThingy.value == 'green')
    {
        buttonsGreen();
    }
    else if (buttonThingy.value =='reset')
    {
        buttonColorReset();
    }
    else if (buttonThingy.value =='random')
    {
        buttonRandomColors();
    }
}

function buttonsRed()
{
    for (let i=0; i< all_buttons.length; i++)
    {
        // remove the second item in the class list example: btn btn-success removes btn-success
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen()
{
    for (let i=0; i< all_buttons.length; i++)
    {
        // remove the second item in the class list example: btn btn-success removes btn-success
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset()
{
    console.log(copyAllButtonsClasses[1]);


    for (let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtonsClasses[i]);
        
    }

    console.log(copyAllButtonsClasses[1]);

}

function buttonRandomColors()
{
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    

    for (let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        let r = Math.floor(Math.random()*choices.length);
        all_buttons[i].classList.add(choices[r]);
    }
}




document.querySelector('#mybutton').addEventListener('click', mainFlow1);
document.querySelector('#mybutton2').addEventListener('click', mainFlow2);

function work(ms)
{
    return new Promise(resolve=> setTimeout(resolve,ms));
}

// do some work.
async function mainFlow1()
{
    console.log('Main flow 1 function: Work started.');
    await work(5000); // browser wil continue while work is being done.
    console.log('Work is completed for main flow 1.');
}

async function mainFlow2()
{
    console.log('Main flow 2 function: Work started.');
    await work(1000); // browser wil continue while work is being done.
    console.log('Work is completed for main flow 2.');
}
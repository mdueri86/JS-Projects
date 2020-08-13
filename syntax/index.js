console.log('test');

let age=10;
console.log(age);

let names = new Array();

let name = {
    first:'jack',
    last:'dueri',
    age:age,
    info: function(){
        return this.first;
    }
};
names.push(name);


name = {
    first:'abby',
    last:'dueri',
    age:11,
    info: function(){
        return this.first;
    }
};
names.push(name);

let family = [
    {
        "first":"Mark",
        "last":"Dueri",
        "age":52

    },
    {
        "first":"Shelly",
        "last":"Dueri",
        "age":46
    }
]

console.log(family);

let numbers = [5,2,655,65,34,342,563];
numbers = numbers.sort(function(a, b){return a-b});
console.log(numbers);

console.log(name);

let sentence = "This is a test";
sentence = sentence.toUpperCase();
console.log(sentence.slice(2,4));


console.log(name,age);

console.log(name.first,name.last,name.age);

let first = name.first;

console.log(name.info());
console.log("The count is ",names.length);

function ageInDays() {
    var birthyear=prompt('What year');
    var h1 = document.createElement("H1");
    var textAnswer = document.createTextNode("you are 1000 days old");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
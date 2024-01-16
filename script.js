import { jokeFromAPI } from './jokeAPI.js';
console.log(typeof jokeFromAPI);
console.log("jokem", jokeFromAPI);
const random = Math.floor(Math.random()*jokeFromAPI.length);
// console.log(jokeFromAPI.length);
// console.log(random);
let paragraph = document.body.children[1].firstElementChild.firstElementChild;
// console.log(paragraph);
// console.log(jokeFromAPI[random])
let lines = jokeFromAPI[random].split(/\n/g);

// console.log(jokeFromAPI[54])
// console.log(lines);
let wholeJoke = "";
for(let i in lines) {
    if(i%2==0) 
        wholeJoke += "<b>" + lines[i] + "</b><br>";
    else
        wholeJoke += lines[i] + "<br>";
}
// console.log(wholeJoke);
paragraph.innerHTML = wholeJoke;
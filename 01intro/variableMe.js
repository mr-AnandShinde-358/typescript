"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let greetings:string // its also fine
var greetings = "Hellow Hitesh";
greetings.toLocaleLowerCase();
console.log(greetings);
// number
// let userId:number=334455.3
// userId=334455.3 // that is bad practice 
// you can also do this typescript preti must wich varible give which value (its call type infernce)
var userId = 334455.3;
userId.toFixed();
// userId="anand" //use get error 
// boolean
var isLoggedIn = false;
// any
// this is best sitution do not do this
/* let hero;

function getHero(){
    return "thor"
}

hero = getHero() */
// asha thikan apalela variable name:type dene garajech ahe
// any
var hero;
// let hero=55// its also work
function getHero() {
    // return true // do not do this 
    return "thor";
}
hero = getHero();

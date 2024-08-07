// let greetings:string // its also fine
let greetings:string ="Hellow Hitesh"


greetings.toLocaleLowerCase()

console.log(greetings);
// number
// let userId:number=334455.3
// userId=334455.3 // that is bad practice 
// you can also do this typescript preti must wich varible give which value (its call type infernce)

let userId=334455.3
userId.toFixed()
// userId="anand" //use get error 
// boolean

let isLoggedIn:boolean =false


// any
// this is best sitution do not do this
/* let hero;

function getHero(){
    return "thor"
}

hero = getHero() */

// asha thikan apalela variable name:type dene garajech ahe

// any
let hero:string
// let hero=55// its also work
function getHero(){
    // return true // do not do this 
    return "thor"
}

hero = getHero()

// any is not specail type to assign it it's samply marker in the type script he samile say he i don't want to check type in its busicaly turn off type type checking

// YOu usually want to avoid this, thought, because any isn't type-checked. Used the compiler flag noImplicitAny

export {}
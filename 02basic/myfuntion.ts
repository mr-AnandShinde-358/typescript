// function name (variablename:type):return type 
// function addTwo(num:number):number{
function addTwo(num:number):number{
    // num.toUpperCase() // not allow to do
    return num +2
    // return "hellow"
}

// addTwo("5")
addTwo(5)


function getUpper(val:string){
    return val.toUpperCase()
}

// getUpper(5)
getUpper("hitesh")

function signUpUser(name:string,email:string,isPaid:boolean){

}

// signUpUser(1,2,3)
signUpUser("anand","anand@gmail.com",false)

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{}

loginUser("h","h@com")


function addnew (num:number){
    return "hellow"
}

const storeValue = addnew(5)

/* 
function getValue(myVal:number):boolean{
    if(myVal>5){
        return true
    }

    return "200 ok"
} */

// when you give return type a function you need to return value 
const getHello = (s:string):string =>{
    return ""
}

const heros=["thor","spiderman","ironman"]
// const heros=[1,2,3]

// also do this
/* heros.map((hero:string)=>{
    return `hero is ${hero}`
}) */

/* 
heros.map(hero=>{
    return `hero is ${hero}`
}) */

// its allwos to do this you need to write  return type 
heros.map(hero=>{
    return 5
})

heros.map((hero):string=>{
    // return 5// not allow to do this
    return "hero is"
})


// this is not good practice when you not want return anything do 2nd example
// 1]
/* function consoleError(errmsg:string){
    console.log(errmsg);
} */

// 2]
function consoleError(errmsg:string):void{
    console.log(errmsg);
    // return 5// not allow to do this
}

// never
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.



function handleError(errmsg:string):never{
    throw new Error(errmsg)
}
export {}
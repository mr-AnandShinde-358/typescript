const User = {
    name:'hitesh',
    email:'hitesh@lco.dev',
    isActive:true
}


function createUser({name:string,isPaid:boolean}){}


createUser({name:"hitesh",isPaid:false})
// this not accept
// createUser({name:"hitesh",isPaid:false,email:"h@h.com"})

let newUser = {name:'hitesh',isPaid:false,email:'h@h.com'}

// one two year ago we not got error in above santax this is bad bahavior type script is fix it and its good to all
// createCourse(newUser)//now we can't do this


// this is confusing santax
// function createCourse():{}{
//     return {}
// }

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}

// Type Aliases


// type User ={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// type Mystring =string
// function createNewUser(user:User):User{
//     return {name:"",email:"",isActive:false}
// }

// createNewUser({name:"",email:"",isActive:true})

// READONLY and optional

type User = {
    readonly _id:string
    readonly fav_Frute:string[],
    name:string,
    email:string,
    isActive:boolean,
    credcardDetails?:number
}

let myUser:User ={
    _id:"1234",
    fav_Frute:["banana"],
    name:"h",
    email:"h@h.com",
    isActive:false
}

myUser.email="h@gmail.com"
// myUser._id="5678" //not allow this becase it readonly properites
let n =myUser.fav_Frute.push("apple")

console.log(n)

type cardNumber = {
    cardnumber:string
}

type cardDate ={
    cardDate:string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number
}

let card:cardDetails={
    cardDate:"2",
    cardnumber:"4",
    cvv:55
}


export {}
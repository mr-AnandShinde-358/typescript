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
export {}
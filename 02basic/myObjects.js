"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'hitesh',
    email: 'hitesh@lco.dev',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "hitesh", isPaid: false });
// this not accept
// createUser({name:"hitesh",isPaid:false,email:"h@h.com"})
var newUser = { name: 'hitesh', isPaid: false, email: 'h@h.com' };
// one two year ago we not got error in above santax this is bad bahavior type script is fix it and its good to all
// createCourse(newUser)//now we can't do this
// this is confusing santax
// function createCourse():{}{
//     return {}
// }
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "1234",
    fav_Frute: ["banana"],
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
// myUser._id="5678" //not allow this becase it readonly properites
var n = myUser.fav_Frute.push("apple");
console.log(n);

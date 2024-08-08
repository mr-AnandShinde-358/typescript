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
function createNewUser(user) {
    return { name: "", email: "", isActive: false };
}
createNewUser({ name: "", email: "", isActive: true });

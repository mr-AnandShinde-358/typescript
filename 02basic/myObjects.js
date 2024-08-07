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
createCourse(newUser);
// this is confusing santax
// function createCourse():{}{
//     return {}
// }
function createCourse() {
    return { name: "reactjs", price: 399 };
}

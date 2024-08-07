"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function name (variablename:type):return type 
// function addTwo(num:number):number{
function addTwo(num) {
    // num.toUpperCase() // not allow to do
    return num + 2;
    // return "hellow"
}
// addTwo("5")
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(5)
getUpper("hitesh");
function signUpUser(name, email, isPaid) {
}
// signUpUser(1,2,3)
signUpUser("anand", "anand@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@com");
function addnew(num) {
    return "hellow";
}
var storeValue = addnew(5);
/*
function getValue(myVal:number):boolean{
    if(myVal>5){
        return true
    }

    return "200 ok"
} */
// when you give return type a function you need to return value 
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});

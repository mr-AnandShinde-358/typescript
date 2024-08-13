"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
identityFour(5);
// identityFour<Bootle>({})
// Generics in Array and Arrow functions
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// const getMoreSearchProducts =()=>{}
// const getMoreSearchProducts =<T>(products:T[]):T=>{
const getMoreSearchProducts = (products) => {
    // do some database operation
    const myIndex = 4;
    products.length;
    return products[myIndex];
};
// function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// Create Instances and Add Items:
// Create an instance of Sellable for Quize
const quize = new Sellable();
quize.addToCart({ name: "javascript", type: "20min" });
const course = new Sellable();
course.addToCart({ author: "hitesh sir", name: "learn typescript ", subject: "typescript" });
// Output the contents of the carts
console.log("Quiz Cart:", quize.cart);
console.log("Course Cart:", course.cart);

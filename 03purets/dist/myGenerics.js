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

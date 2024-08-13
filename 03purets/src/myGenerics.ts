const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

function identityFour<T>(val: T): T {
  return val;
}

identityFour(5);

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})

// Generics in Array and Arrow functions

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}


// const getMoreSearchProducts =()=>{}

// const getMoreSearchProducts =<T>(products:T[]):T=>{
const getMoreSearchProducts =<T,>(products:T[]):T=>{ // <T ,> this comma is not ordinary tag just like p tag or a tag this is "Generic"
    // do some database operation
    const myIndex = 4
    products.length
    return products[myIndex]
}

// Generic classes

interface Database {
    connection:string,
    username:string,
    password:string
}

// function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3,{connection:"xyz",username:"dkjd",password:"anand"})

interface Quize{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}


// Create Instances and Add Items:

// Create an instance of Sellable for Quize

const quize = new Sellable<Quize>();
quize.addToCart({name:"javascript",type:"20min"})

const course = new Sellable<Course>();
course.addToCart({author:"hitesh sir",name:"learn typescript ",subject:"typescript"})
// Output the contents of the carts
console.log("Quiz Cart:", quize.cart);
console.log("Course Cart:", course.cart);



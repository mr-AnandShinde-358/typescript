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
const score:Array<number> = []
const names:Array<string> =[]

function identityOne(val:boolean|number):boolean|number{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

// identityThree(true)

function identityFour<T>(val:T):T{
    return val
}

identityFour(5)

interface Bootle{
    brand:string,
    type:number
}

identityFour<Bootle>({})

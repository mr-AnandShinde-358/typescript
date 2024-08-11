// const user:(string|number)[]=[1,"hc"]

let tUser:[string,number,boolean]

tUser=["hc",33,true]

//Tupel: this tuple is assing value in order in above exp first assign string, number and then boolean value  

// tUser=[true,33,"hc"]// it not allowed

let rgb:[number,number,number]=[255,234,553]
type User = [number,string]

const newUser:User = [443,"example.com"]
newUser[1]="h@h.com"
// newUser.push(true) // this issue fixed by typescript
export{}

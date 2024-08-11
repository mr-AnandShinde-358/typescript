interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string
    // startTrail:()=>string
    startTrail():string,
    getCoupon(couponname:string,value:number):number
}

interface User {
    githubToken:string
}

// interface Admin extends User,another{ // also do this 
interface Admin extends User{
    role:"admin"|"ta"|"learner"
}
const hitesh:Admin = {dbId:22,email:"h@h.com",userId:223,
    startTrail:()=>{
        // return 2 // this not allowed
        return "trail started"
    },
    getCoupon:(name:'hitesh10',off:10)=>{
        return 50
    },
    githubToken:"github",
    role:"admin"
}

hitesh.email="h@hc.com"
// hitesh.dbId=34
export{}
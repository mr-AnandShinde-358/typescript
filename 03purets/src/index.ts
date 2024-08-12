
// class User{
//     public email:string
//     private name:string
//     // #name:string
//      readonly city:string="Jaipur"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//         this.city
//     }
// }

class User{

    private _courseCount =1
    readonly city:string="Jaipur"
    constructor(
        public email:string,
        public name:string,
        // private userId:string
    ){
    }

    private deleteToken(){
        console.log("Token deleted")
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNumber){
        if(courseNumber<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNumber
    }
}

const hitesh = new User("h@h.com","hitesh")
// hitesh.city="Jaipur"
// hitesh.deleteToken()



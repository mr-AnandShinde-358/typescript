abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

   abstract getSepia():void

   realTime():number{
    return 8
   }
}


// const hc = new TakePhoto("test","Test") // you can't


class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepea")
    }

}
const hc = new Instagram("test","Test",33) 

hc.realTime()
"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    realTime() {
        return 8;
    }
}
// const hc = new TakePhoto("test","Test") // you can't
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepea");
    }
}
const hc = new Instagram("test", "Test", 33);
hc.realTime();

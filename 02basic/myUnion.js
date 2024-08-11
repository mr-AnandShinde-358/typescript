"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
// function getDbId(id:number| string){
//     // making some API calls
//     console.log(`DB id is:${id}`)
// }
// functions
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 3;
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["2", "5", "1"];
var data4 = [2, 5, 1];
var data5 = ["2", "5", 1, true];
var pi = 3.14;
// pi=3.145// this not allow only allow to assign 3.14 value 
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "window";

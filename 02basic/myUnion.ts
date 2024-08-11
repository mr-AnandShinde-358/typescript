let score: number | string = 33;
score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "hc", id: 334 };

// function getDbId(id:number| string){
//     // making some API calls
//     console.log(`DB id is:${id}`)
// }

// functions

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id + 3;
  }
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = ["2", "5", "1"];
const data4: string[] | number[] = [2, 5, 1];
const data5: (string | number|boolean)[] = ["2", "5", 1,true];

let pi:3.14=3.14
// pi=3.145// this not allow only allow to assign 3.14 value 

let seatAllotment:"aisle"|"middle"|"window"

seatAllotment="aisle"
seatAllotment="window"
// seatAllotment="crew" // this not allow only allow to assign asile||middle||window value 

export {};
